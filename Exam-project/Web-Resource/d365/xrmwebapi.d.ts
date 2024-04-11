
/// <reference path="./entityreference.d.ts" />

// Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi

declare namespace D365 {
    export namespace Sdk {
        export interface MetadataParameterType {
            /**
            * The metadata for enum types.
            */
            enumProperties?: { name: string; value: string; };

            /**
            * The category of the parameter type. Specify one of the following values:
            * 0:Unknonw, 1:PrimitiveType, 2:ComplexType, 3:EnumerationType, 4:Collection, 5:EntityType
            */
            structuralProperty: number;

            /**
            * The fully qualified name of the parameter type.
            */
            typeName: string;
        }

        export interface MetadataParameterTypes {
            [paramName: string]: D365.Sdk.MetadataParameterType
        }

        /**
        * Object that will be passed to the Web API endpoint to execute an action, function, or CRUD request.
        */
        export interface WebApiExecuteRequest {
            /**
            * The object exposes a getMetadata method that lets you define the metadata for the action, function or CRUD request you want to execute.
           */
            getMetadata(): WebApiExecuteRequestMetadata;

            [paramName: string]: any;
        }

        export interface WebApiExecuteRequestMetadata {
            /**
            * The name of the bound parameter for the action or function to execute.
            * Specify undefined if you are executing a CRUD request.
            * Specify null if the action or function to execute is not bound to any entity.
            * Specify entity logical name or entity set name in case the action or function to execute is bound to one.
            */
            boundParameter?: string;

            /**
             * Name of the action, function, or one of the following values if you are executing a CRUD request: "Create", "Retrieve", "RetrieveMultiple", "Update", or "Delete".
             */
            operationName?: string;

            /**
            * Indicates the type of operation you are executing.Specify one of the following values: 0: Action, 1: Function, 2: CRUD
            */
            operationType?: number;

            /** 
            * The metadata for parameter types.
            */
            parameterTypes?: MetadataParameterTypes;
        }

        export interface WebApiExecuteResponse {
            /**
            * Response body. TODO: verificare se la proprietà corretta è invece responseText
            */
            body?: object;

            /**
             * Response text.
             */
            responseText?: string;

            /**
            * Response headers.
            */
            headers: object;

            /**
            * Indicates whether the request was successful.
            */
            ok: boolean;

            /**
            * Numeric value in the response status code.For example: 200
            */
            status: number;

            /**
            * Description of the response status code.For example: OK
            */
            statusText: string;

            /**
            * Response type.Values are: the empty string (default), "arraybuffer", "blob", "document", "json", and "text".
            */
            type: string;

            /**
            * Request URL of the action, function, or CRUD request that was sent to the Web API endpoint.
            */
            url: string;
        }

        export interface WebApiRetrieveMultipleRecordsResponse {
            /**
            *  An array of JSON objects, where each object represents the retrieved entity record
            * containing attributes and their values as key: value pairs.
            */
            entities: Entity[];

            /**
            * If the number of records being retrieved is more than the value specified in the
            * maxPageSize parameter, this attribute returns the URL to return next set of records.
            */
            nextLink: string;
        }

        export interface Entity {
            [key: string]: any;
        }

        export interface CommonWebApi {
            /**
            * Creates an entity record.
            * @param entityLogicalName Logical name of the entity you want to create. For example: "account".
            * @param data An object defining the attributes and values for the new entity record.
            */
            // TODO Verificare il valore di ritorno (entity oppure entity reference).
            createRecord(entityLogicalName: string, data: { [key: string]: any }): Promise<EntityReference>;

            /**
            * Deletes an entity record.
            * @param entityLogicalName The entity logical name of the record you want to delete. For example: "account".
            * @param id GUID of the entity record you want to delete.
            */
            deleteRecord(entityLogicalName: string, id: string): Promise<EntityReference>;

            /**
            * Retrieves an entity record.
            * @param entityLogicalName The entity logical name of the record you want to retrieve. For example: "account".
            * @param id GUID of the entity record you want to retrieve.
            * @param options OData system query options, $select and $expand, to retrieve your data.
            */
            retrieveRecord(entityLogicalName: string, id: string, options?: string): Promise<Entity>;

            /**
            * Retrieves a collection of entity records.
            * @param entityLogicalName The entity logical name of the records you want to retrieve. For example: "account".
            * @param options OData system query options or FetchXML query to retrieve your data.
            * @param maxPageSize Specify a positive number that indicates the number of entity records to be returned per page. If you do not specify this parameter, the default value is passed as 5000.
            */
            retrieveMultipleRecords(entityLogicalName: string, options?: string, maxPageSize?: number): Promise<WebApiRetrieveMultipleRecordsResponse>;

            /**
            * Updates an entity record.
            * @param entityLogicalName The entity logical name of the record you want to update. For example: "account".
            * @param id GUID of the entity record you want to update.
            * @param data An object containing key:value pairs, where key is the property of the entity and value is the value of the property you want update.
            */
            updateRecord(entityLogicalName: string, id: string, data: { [key: string]: any }): Promise<EntityReference>;

            /**
              * Returns a boolean value indicating whether an entity is offline enabled.
              * @param entityLogicalName Logical name of the entity. For example: "account".
              */
            isAvailableOffline(entityLogicalName: string): boolean;
        }


        export interface OnlineWebApi extends CommonWebApi {
            /**
            * Execute a single action, function, or CRUD operation.
            * @param request Object that will be passed to the Web API endpoint to execute an action, function, or CRUD request.
            */
            execute(request: WebApiExecuteRequest): Promise<WebApiExecuteResponse>;

            /**
            * Execute a collection of action, function, or CRUD operations.
            * @param requests An array of requests or array of requests.
            */
            executeMultiple(requests: (WebApiExecuteRequest | WebApiExecuteRequest[])[]): Promise<WebApiExecuteResponse[]>;
        }

        export interface OfflineWebApi extends CommonWebApi {

        }

        /**
        * Provides properties and methods to use Web API
        * to create and manage records and execute Web API actions and functions
        * in Customer Engagement.
        */
        export interface XrmWebApi extends OnlineWebApi {
            /**
            * Provides methods to use Web API to create and manage records and execute Web API actions
            * and functions in Customer Engagement when connected to the Customer Engagement server (online mode).
            */
            online: OnlineWebApi;

            /**
            * Provides methods to create and manage records in the Dynamics 365 Customer Engagement
            * mobile clients while working in the offline mode.
            */
            offline: OfflineWebApi;
        }
    }
}
