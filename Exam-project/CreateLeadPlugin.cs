using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace Exam_project
{
    public class CreateLeadPlugin : IPlugin
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
                string topic = Target.GetAttributeValue<string>("subject");
                Target["subject"] = topic + " " + DateTime.UtcNow.ToString("dd/MM/yyyy");

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
    }
}

