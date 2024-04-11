
/// <reference path="./entityreference.d.ts" />
/// <reference path="./collections.d.ts" />
/// <reference path="./executioncontext.d.ts" />
/// <reference path="./attributes.d.ts" />

//Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity

declare namespace D365 {
    export namespace Sdk {
        export interface FormContextDataEntity {
            /**
            * Collection of attributes for a record displayed on the form.
            */
            attributes: Collection<Attribute>;

            /**
             * Adds a function to be called when the record is saved.
             * @param myFunction The function to be executed when the record is saved. The function will be added to the bottom of the event handler pipeline.
             */
            addOnSave(myFunction: (context: ExecutionContext) => void): void;

            /**
            * Returns a string representing the XML that will be sent to the server when the record is saved.
            * Only data in fields that have changed are set to the server.
            */
            getDataXml(): string;

            /**
            * Returns a string representing the logical name of the entity for the record.
            */
            getEntityName(): string;

            /**
            * Returns a lookup value that references the record.
            */
            getEntityReference(): EntityReference;

            /*
            * Returns a string representing the GUID value for the record.
            */
            getId(): string;

            /**
            * Gets a boolean value indicating whether any fields in the form have been modified.
            */
            getIsDirty(): boolean;

            /**
            * Gets a string for the value of the primary attribute of the entity.
            */
            getPrimaryAttributeValue(): string;

            /**
            * Gets a boolean value indicating whether all of the entity data is valid.
            */
            isValid(): boolean;

            /**
             * Removes a function to be called when form data is loaded.
             * @param myFunction The function to be removed for the OnSave event.
             */
            removeOnSave(myFunction: (context: ExecutionContext) => void): void;

            /**
            * Saves the record synchronously with the options to close the form or open a new form after the save is completed.
            * @param saveOption Specify options for saving the record. If no parameter is included in the method, the record will simply be saved.
            * This is the equivalent of using the Save command.
            * You can specify one of the following values: 'saveandclose', 'saveandnew'
            */
            save(saveOption?: string): void;
        }
    }
}
