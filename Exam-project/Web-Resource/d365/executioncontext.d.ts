
/// <reference path="./saveeventargs.d.ts" />
/// <reference path="./formcontext.d.ts" />

//Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/execution-context

declare namespace D365 {
    export namespace Sdk {
        /**
        * The execution context defines the event context in which your code executes.
        */
        export interface ExecutionContext {
            /**
             * Returns a value that indicates the order in which this handler is executed.
             */
            getDepth(): number;

            /**
             * Returns an object with methods to manage the Save event.
             */
            getEventArgs(): SaveEventArgs;

            /**
             * Returns a reference to the object that the event occurred on.
             */
            getEventSource(): any;

            /**
             * Returns a reference to the form or an item on the form such as editable grid depending on where the method was called.
             */
            getFormContext(): FormContext | GridControl;

            /**
             * Retrieves a variable set using setSharedVariable.
             * @param key The name of the variable.
             */
            getSharedVariable(key: string): any;

            /**
             * Sets the value of a variable to be used by a handler after the current handler completes.
             * @param key The name of the variable.
             * @param value The value to set.
             */
            setSharedVariable(key: string, value: any): void;
        }

    }
}
