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
    public class CreateWorkOrderPlugin : IPlugin
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
                EntityReference assignedAgentEntReference = Target.GetAttributeValue<EntityReference>("exam_assignedagent");
                Entity agentEntity = service.Retrieve(assignedAgentEntReference.LogicalName, assignedAgentEntReference.Id, new ColumnSet("exam_isscheduledmonday", "exam_isscheduledtuesday", "exam_isscheduledwednesday", "exam_isscheduledthursday", "exam_isscheduledfriday", "exam_isscheduledsaturday", "exam_isscheduledsunday", "exam_name"));
                OptionSetValue scheduledOn = Target.GetAttributeValue<OptionSetValue>("exam_scheduledon");

                bool scheduledMonday = agentEntity.GetAttributeValue<bool>("exam_isscheduledmonday");
                bool scheduledTuesday = agentEntity.GetAttributeValue<bool>("exam_isscheduledtuesday");
                bool scheduledWednesday = agentEntity.GetAttributeValue<bool>("exam_isscheduledwednesday");
                bool scheduledThursday = agentEntity.GetAttributeValue<bool>("exam_isscheduledthursday");
                bool scheduledFriday = agentEntity.GetAttributeValue<bool>("exam_isscheduledfriday");
                bool scheduledSaturday = agentEntity.GetAttributeValue<bool>("exam_isscheduledsaturday");
                bool scheduledSunday = agentEntity.GetAttributeValue<bool>("exam_isscheduledsunday");
                bool scheduleDay =  false;

                switch (scheduledOn.Value)
                {
                    case (int)ScheduleOn.Monday:
                        scheduleDay = scheduledMonday;
                        break;
                    case (int)ScheduleOn.Tuesday:
                        scheduleDay = scheduledTuesday;
                        break;
                    case (int)ScheduleOn.Wednesday:
                        scheduleDay = scheduledWednesday;
                        break;
                    case (int)ScheduleOn.Thursday:
                        scheduleDay = scheduledThursday;
                        break;
                    case (int)ScheduleOn.Friday:
                        scheduleDay = scheduledFriday;
                        break;
                    case (int)ScheduleOn.Saturday:
                        scheduleDay = scheduledSaturday;
                        break;
                    case (int)ScheduleOn.Sunday:
                        scheduleDay = scheduledSunday;
                        break;
                }

                if (scheduleDay != true)
                {
                    string agentName = agentEntity.GetAttributeValue<string>("exam_name");
                    throw new InvalidPluginExecutionException("Agent " + agentName + " is not available on that day");
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
    }
}

