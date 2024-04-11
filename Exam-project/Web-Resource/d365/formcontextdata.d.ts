
/// <reference path="./collections.d.ts" />
/// <reference path="./attributes.d.ts" />
/// <reference path="./formcontextdataentity.d.ts" />
/// <reference path="./formcontextdataprocess.d.ts" />

//Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data

declare namespace D365 {
    export namespace Sdk {
        export interface SaveOptions {
            /**
            * Specify a value indicating how the save event was initiated.
            */
            saveMode?: number,

            /**
            * Indicate whether to use the Book or Reschedule messages rather than the Create or Update messages.
            * This option is only applicable when used with appointment, recurring appointment,
            * or service activity records.
            */
            useSchedulingEngine?: boolean
        }

        export interface FormContextData {
            /**
             * Collection of non-entity data on the form.
             * Items in this collection are of the same type as the attributes collection,
             * but they are not attributes of the form entity.
             * NOTE: This is supported only for Unified Interface clients.
            */
            attributes: Collection<Attribute>;

            /**
             * Provides methods to retrieve information specific to the record displayed on the page,
             * the save method, and a collection of all the attributes included on the form.
             * Attribute data is limited to attributes represented by fields on the form.
            */
            entity: FormContextDataEntity;

            /**
            * Provides objects and methods to interact with the business process flow data on a form.
            */
            process: FormContextDataProcess;

            /**
             * Adds a function to be called when form data is loaded.
             * @param myFunction The function to be executed when the form data loads. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function.
             */
            addOnLoad(myFunction: (context: ExecutionContext) => void): void;

            /**
            * Gets a boolean value indicating whether the form data has been modified.
            */
            getIsDirty(): boolean;

            /**
             * Gets a boolean value indicating whether all of the form data is valid.
             * This includes the main entity and any unbound attributes.
            */
            isValid(): boolean;

            /**
            * Asynchronously refreshes and optionally saves all the data of the form without reloading the page.
            * @param save true if the data should be saved after it is refreshed, otherwise false.
            */
            refresh(save?: boolean): Promise<void>;

            /**
             * Removes a function to be called when form data is loaded.
             * @param myFunction The function to be removed when the form data loads.
             */
            removeOnLoad(myFunction: (context: ExecutionContext) => void): void;

            /**
             * Saves the record asynchronously with the option to set callback functions to be executed after the save operation is completed.
             * @param saveOptions An object for specifying options for saving the record.
            */
            save(saveOptions?: SaveOptions): Promise<void>;
        }
    }
}
