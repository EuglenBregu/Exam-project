
//Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process

declare namespace D365 {
    export namespace Sdk {
        export interface FormContextDataProcess {
            /**
            * Adds a function as an event handler for the OnPreProcessStatusChange event
            * so that it will be called before the business process flow status changes.
            * This client API is only supported on the Unified Client. The legacy web client does not support this client API.
            * @param myFunction The function to be executed when the business process flow status changes. The function will be added to the bottom of the event handler pipeline.
            */
            addOnPreProcessStatusChange(myFunction: (executionContext: ExecutionContext) => void): void;

            /**
            * Removes an event handler from the OnPreProcessStatusChange event.
            * @param myFunction The function to be removed from the OnPreProcessStatusChange event.
            */
            removeOnPreProcessStatusChange(myFunction: (executionContext: ExecutionContext) => void): void;

            /**
            * Adds a function as an event handler for the OnProcessStatusChange event
            * so that it will be called when the business process flow status changes.
            * @param myFunction The function to be executed when the business process flow status changes. The function will be added to the bottom of the event handler pipeline.
            */
            addOnProcessStatusChange(myFunction: (executionContext: ExecutionContext) => void): void;

            /**
            * Removes an event handler from the OnProcessStatusChange event.
            * @param myFunction The function to be removed from the OnProcessStatusChange event.
            */
            removeOnProcessStatusChange(myFunction: (executionContext: ExecutionContext) => void): void;

            /**
            * Adds a function as an event handler for the OnStageChange event
            * so that it will be called when the business process flow stage changes.
            * @param myFunction The function to be executed when the business process flow stage changes. The function will be added to the bottom of the event handler pipeline. 
            */
            addOnStageChange(myFunction: (executionContext: ExecutionContext) => void): void;

            /**
            * Removes an event handler from the OnStageChange event.
            * @param myFunction The function to be removed from the OnStageChange event.
            */
            removeOnStageChange(myFunction: (executionContext: ExecutionContext) => void): void;

            /**
            * Adds a function as an event handler for the OnStageSelected event
            so that it will be called when a business process flow stage is selected.
            * @param myFunction The function to be executed when the business process flow stage is selected. The function will be added to the bottom of the event handler pipeline.
            */
            addOnStageSelected(myFunction: (executionContext: ExecutionContext) => void): void;

            /**
            * Removes an event handler from the OnStageSelected event.
            * @param myFunction The function to be removed from the OnStageSelected event.
            */
            removeOnStageSelected(myFunction: (executionContext: ExecutionContext) => void): void;

            /**
            * Returns a Process object representing the active process.
            */
            getActiveProcess(): Process;

            /**
            * Sets a Process as the active process.
            * If there is an active instance of the process, the entity record is loaded with the process instance ID.
            * If there is no active instance of the process, a new process instance is created
            * and the entity record is loaded with the process instance ID.
            * If there are multiple instances of the current process, the record is loaded with the first instance
            * of the active process as per the defaulting logic, that is the most recently used process instance per user.
            * @param processId The Id of the process to set as the active process.
            * @param callbackFunction A function to call when the operation is complete.
            * This callback function is passed one of the following string values to indicate whether the operation succeeded:
            * 'success': The operation succeeded. 
            * 'invalid': The processId isn’t valid or the process isn’t enabled.
            */
            setActiveProcess(processId: string, callbackFunction?: (status: string) => void): void;

            /**
            * Returns all the process instances for the entity record that the calling user has access to.
            * @param callbackFunction The callback function is passed a process instance.
            */
            getProcessInstances(callbackFunction: (instance: ProcessInstance) => void): void;

            /**
            * Sets a process instance as the active instance.
            * @param processInstanceId The Id of the process instance to set as the active instance.
            * @param callbackFunction A function to call when the operation is complete.
            * This callback function is passed one of the following string values to indicate whether the operation succeeded:
            * 'success':The operation succeeded.
            * 'invalid': The processInstanceId isn’t valid or the process isn’t enabled.
            */
            setActiveProcessInstance(processInstanceId: string, callbackFunction?: (status: string) => void): void;

            /**
            * Returns the unique identifier of the process instance.
            */
            getInstanceId(): string;

            /**
            * Returns the name of the process instance.
            */
            getInstanceName(): string;

            /**
            * Returns the current status of the process instance.
            * Returns one of the following values: 'active', 'aborted', or 'finished'.
            */
            getStatus(): string;

            /**
            * Sets the current status of the active process instance.
            * @param status The new status. The values can be 'active', 'aborted', or 'finished'.
            * @param callbackFunction A function to call when the operation is complete.
            * This callback function is passed the new status as a string value.
            */
            setStatus(status: string, callbackFunction?: (status: string) => void): void;

            /**
            * Returns a ProcessStage object representing the active stage.
            */
            getActiveStage(): ProcessStage;

            /**
            * Sets a completed stage as the active stage.
            * This method can only be used when the selected stage and the active stage are the same.
            * For best results, this method should only be used in code that is called in functions initiated by the OnStageChange and OnStageSelected events.
            * @param stageId The ID of the completed stage for the entity to make the active stage.
            * @param callbackFunction A function to call when the operation is complete.
            * This callback function is passed one of the following string values to indicate the status of the operation:
            * 'success': The operation succeeded.
            * 'invalid': The stageId parameter is a non-existent stage ID value, or the active stage isn’t the selected stage, or the record hasn’t been saved yet.
            * 'unreachable': The stage exists on a different path.
            * 'dirtyForm': The data in the page is not saved.
            */
            setActiveStage(stageId: string, callbackFunction?: (status: string) => void): void;

            /**
            * Progresses to the next stage.
            * You can also move to a next stage in a different entity.
            * This method can only be used when the selected stage and the active stage are the same.
            * For best results, this method should only be used in code that is called in functions initiated by the OnStageChange and OnStageSelected events.
            * @param callbackFunction A function to call when the operation is complete. This callback function is passed one of the following string values to indicate the status of the operation: 'success', 'crossEntity', 'end', 'invalid', 'dirtyForm'.
            */
            moveNext(callbackFunction?: (status: string) => void): void;

            /**
            * Moves to the previous stage.
            * You can also move to a previous stage in a different entity.
            * This method can only be used when the selected stage and the active stage are the same.
            * For best results, this method should only be used in code that is called in functions initiated by the OnStageChange and OnStageSelected events.
            * @param callbackFunction A function to call when the operation is complete. This callback function is passed one of the following string values to indicate the status of the operation: 'success', 'crossEntity', 'beginning', 'invalid', 'dirtyForm'.
            */
            movePrevious(callbackFunction?: (status: string) => void): void;

            /**
            * Gets a collection of stages currently in the active path with methods to interact with the stages displayed in the business process flow control.
            * The active path represents stages currently rendered in the process control based on the branching rules and current data in the record.
            */
            getActivePath(): Collection<ProcessStage>;

            /**
            * Asynchronously retrieves the business process flows enabled for an entity that the current user can switch to.
            * @param callbackFunction The callback function must accept a parameter that contains an object
            * with dictionary properties where the name of the property is the Id of the business process flow
            * and the value of the property is the name of the business process flow.
            */
            getEnabledProcesses(callbackFunction: (processes: { [processId: string]: string }) => void): void;

            /**
            * Gets the currently selected stage.
            */
            getSelectedStage(): ProcessStage;
        }

        export interface ProcessInstance {
            CreatedOnDate: Date;
            ProcessDefinitionId: string;
            ProcessDefinitionName: string;
            ProcessInstanceId: string;
            ProcessInstanceName: string;
            StatusCodeName: string;
        }

        export interface Process {
            /**
            * Returns the unique identifier of the process.
            */
            getId(): string;

            /**
            * Returns the name of the process.
            */
            getName(): string;

            /**
            * Returns a collection of stages in the process.
            */
            getStages(): Collection<ProcessStage>;

            /**
            * Returns a boolean value indicating whether the process is rendered.
            */
            isRendered: boolean;
        }

        export interface ProcessStage {
            /**
            * Returns an object with a getValue() method which will return the integer value of the business process flow category.
            */
            getCategory(): ProcessStageCategory;

            /**
            * Returns the logical name of the entity associated with the stage.
            */
            getEntityName(): string;

            /**
            * Returns the unique identifier of the stage.
            */
            getId(): string;

            /**
            * Returns the name of the stage.
            */
            getName(): string;

            /**
             * Returns a navigation behavior object for a stage that can be used to define
             * whether the Create button is available for users to create other entity record
             * in a cross-entity business process flow navigation scenario.
             * NOTE: this method is available only for Unified Interface.
             * */
            getNavigationBehavior(): ProcessNavigationBehavior

            /**
            * Returns the status of the stage.
            * This method will return either 'active' or 'inactive'.
            */
            getStatus(): string;

            /**
            * Returns a collection of steps in the stage.
            */
            getSteps(): Collection<ProcessStageStep>;
        }

        export interface ProcessStageCategory {
            /**
            * Returns the integer value of the business process flow category.
            * Here is the list of possible values:
            * 0: Qualify
            * 1: Develop
            * 2: Propose
            * 3: Close
            * 4: Identify
            * 5: Research
            * 6: Resolve
            */
            getValue(): number;
        }

        export interface ProcessStageStep {
            /**
            * Returns the logical name of the attribute associated to the step.
            */
            getAttribute(): string;

            /**
            * Returns the name of the step.
            */
            getName(): string;

            /**
            * Returns the progress of the action step.
            * Returns one of the following values: 0:none, 1:processing, 2:completed, 3:failure, 4:invalid.
            */
            getProgress(): number;

            /**
            * Returns a boolean value indicating whether the step is required in the business process flow.
            */
            isRequired(): boolean;

            /**
            * Updates the progress of the action step.
            * Returns 'invalid' or 'success' depending on whether the step progress was updated.
            * @param stepProgress Specify one of the following values to specify the step progress: 0:none, 1:processing, 2:completed, 3:failure, 4:invalid.
            * @param message An optional message that is set as the Alt text on the icon for the step.
            */
            setProgress(stepProgress: number, message?: string): string;
        }

        export interface ProcessNavigationBehavior {
            /**
             * A boolean property that lets you define whether the Create button will be available in a stage
             * so that user can create an instance of entityB from the entityA form in a cross-entity
             * business process flow navigation scenario.
             * */
            allowCreateNew: boolean;
        }


    }
}
