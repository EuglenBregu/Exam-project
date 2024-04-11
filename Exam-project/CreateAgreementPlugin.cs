using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System.Security.Principal;
using System.Security.Cryptography.X509Certificates;

namespace Exam_project
{
    public class CreateAgreementPlugin : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            ITracingService tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            IPluginExecutionContext context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            IOrganizationServiceFactory serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);
            Entity Target = (Entity)context.InputParameters["Target"];

            try
            {
                EntityReference accountEntReference = Target.GetAttributeValue<EntityReference>("exam_account");
                Entity account = service.Retrieve(accountEntReference.LogicalName, accountEntReference.Id, new ColumnSet("primarycontactid"));
                OptionSetValue agreementType = Target.GetAttributeValue<OptionSetValue>("exam_agreementtype");

                var fetchQuery = FetchAgreement(accountEntReference.Id, agreementType.Value);
                var agreements = service.RetrieveMultiple(new FetchExpression(fetchQuery));

                switch (agreementType.Value)
                {
                    case (int)AgreementType.Onboarding:                       

                        if (agreements.Entities.Count > 0)
                        {
                            throw new InvalidPluginExecutionException("There already is an agreement of type Onboarding associated with this Account");
                        }
                        else if (Target.Contains("exam_agreementstartdate") && Target.Contains("exam_agreementenddate"))
                        {
                            QueryExpression query = new QueryExpression("opportunity");
                            query.ColumnSet = new ColumnSet("parentaccountid", "statecode");

                            FilterExpression filter = new FilterExpression(LogicalOperator.And);
                            ConditionExpression stateCondition = new ConditionExpression("statecode", ConditionOperator.Equal, (int)StateCode.Active);
                            ConditionExpression accountCondition = new ConditionExpression("parentaccountid", ConditionOperator.Equal, account.Id);
                            filter.AddCondition(stateCondition);
                            filter.AddCondition(accountCondition);
                            query.Criteria = filter;

                            EntityCollection opportunities = service.RetrieveMultiple(query);

                            foreach (var Opportunity in opportunities.Entities)
                            {
                                Entity OpportunityEntity = new Entity(Opportunity.LogicalName, Opportunity.Id);
                                bool tcs = Opportunity.GetAttributeValue<bool>("exam_tcs");
                                Opportunity["exam_tcs"] = true;
                                service.Update(Opportunity);
                            }
                        }
                        break;

                    case (int)AgreementType.Annual:
                        break;

                    case (int)AgreementType.NDA:

                        if (agreements.Entities.Count > 0)
                        {
                            throw new InvalidPluginExecutionException("There already is an agreement of type NDA associated with this Account");

                        }
                        break;
                } 
            }

            catch (FaultException<OrganizationServiceFault> ex)
            {
                throw new InvalidPluginExecutionException("An error occurred in FollowUpPlugin.", ex);
            }

            catch (Exception ex)
            {
                tracingService.Trace("FollowUpPlugin: {0}", ex.ToString());
                throw;
            }
        }
        public string FetchAgreement(Guid accountId, int agreementTypeValue)
        {
            return $@"<fetch version='1.0' mapping='logical' no-lock='false' distinct='true'>
                   <entity name='exam_agreement'>
                    <attribute name='exam_account'/>
                    <attribute name='exam_agreementtype'/>
                    <filter type='and'>
                      <condition attribute='statecode' operator='eq' value='{StateCode.Active}'/>
                      <condition attribute='exam_account' operator='eq' value='{accountId}' />
                      <condition attribute='exam_agreementtype' operator='eq' value='{agreementTypeValue}'/>
                    </filter>
                   </entity>
                  </fetch>";
        }
    }
}

