
/// <reference path="./globalcontext.d.ts" />

// Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility

declare namespace D365 {
    export namespace Sdk {
        export interface LookupObjectFilter {
            /**
             * The FetchXML filter element to apply.
             * */
            filterXml: string;

            /**
             * The entity type to which to apply this filter.
             * */
            entityLogicalName: string;
        }

        export interface LookupObjectsOptions {
            /**
            Indicates whether the lookup allows more than one item to be selected.
            */
            allowMultiSelect?: boolean;

            /**
            * The default entity type to use.
            */
            defaultEntityType?: string;

            /**
            * The default view to use.
            */
            defaultViewId?: string;

            /**
             * Decides whether to display the most recently used(MRU) item.
             * Available only for Unified Interface.
             * */
            disableMru: boolean;

            /**
            * The entity types to display.
            */
            entityTypes?: string[];

            /**
             * Used to filter the results.
             * */
            filters?: LookupObjectFilter[];

            /**
            * Indicates whether the lookup control should show the barcode scanner in mobile clients.
            */
            showBarcodeScanner?: boolean;

            /**
            * The views to be available in the view picker. Only system views are supported.
            */
            viewIds?: string[];
        }

        /**
        * Provides a container for useful methods.
        */
        export interface XrmUtility {
            /**
            * Closes a progress dialog box.
            * If no progress dialog is displayed currently, this method will do nothing.
            * You can display a progress dialog using the showProgressIndicator method.
            */
            closeProgressIndicator(): void;

            /**
            * Returns the valid state transitions for the specified entity type and state code.
            * @param entityName The logical name of the entity.
            * @param stateCode The state code to find out the allowed status transition values.
            */
            // TODO Verificare il valore restituito
            getAllowedStatusTransitions(entityName: string, stateCode: number): Promise<any>;

            /**
            * Returns the entity metadata for the specified entity.
            * @param entityName The logical name of the entity.
            * @param attributes The attributes to get metadata for.
            */
            // TODO Verificare il valore ritornato
            getEntityMetadata(entityName: string, attributes?: string[]): Promise<any>;

            /**
            * Gets the global context.
            * The method provides access to the global context
            * without going through the form context. It contains an equivalent
            * of all the methods available for the Xrm.Page.context object (now deprecated)
            * to retrieve information specific to the client, organization or user.
            */
            getGlobalContext(): GlobalContext;

            /**
            * Returns the name of the DOM attribute expected by the Learning Path (guided help) Content Designer
            * for identifying UI controls in the Dynamics 365 for Customer Engagement apps form.
            */
            getLearningPathAttributeName(): string;

            /**
            * Returns the localized string for a given key associated with the specified web resource.
            * @param webResourceName The name of the web resource.
            * @param key The key for the localized string.
            */
            getResourceString(webResourceName: string, key: string): string;

            /**
            * Invokes an action based on the specified parameters.
            * On success, returns Web API result along with any action output.
            * @param name Name of the process action to invoke.
            * @param parameters An object containing input parameters for the action.
            */
            // TODO Verificare il valore restituito
            invokeProcessAction(name: string, parameters?: { [key: string]: any }): Promise<any>;

            /**
            * Opens a lookup control to select one or more items.
            * @param options Defines the options for opening the lookup dialog.
            */
            lookupObjects(options: LookupObjectsOptions): Promise<EntityReference[]>;

            /**
            * Refreshes the parent grid containing the specified record.
            */
            refreshParentGrid(lookup: EntityReference): void;

            /**
            * Displays a progress dialog with the specified message.
            * Any subsequent call to this method will update the displayed message
            * in the existing progress dialog with the message specified in the latest method call.
            */
            showProgressIndicator(message: string): void;
        }
    }
}
