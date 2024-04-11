
// Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/save-event-arguments

declare namespace D365 {
    export namespace Sdk {
        export interface SaveEventArgs {
            /**
             * Returns a value indicating how the save event was initiated by the user. Values:
             *  1: Save
             *  2: Save and Close
             *  5: Deactivate
             *  6: Reactivate
             *  7: Send (Email only)
             * 15: Disqualify (Lead only)
             * 16: Qualify (Lead only)
             * 47: Assign (all User or Team owned entities)
             * 58: Save and Completed (Activities only)
             * 59: Save and New
             * 70: Auto Save
             */
            getSaveMode(): number;

            /**
             * Returns a value indicating whether the save event has been canceled
             * because the preventDefault method was used in this event handler or a previous event handler.
             */
            isDefaultPrevented(): boolean;

            /**
             * Cancels the save operation, but all remaining handlers for the event will still be executed.
             */
            preventDefault(): void;
        }
    }
}
