declare namespace D365 {
    export namespace Sdk {
        export interface EntityReference {
            /**
            * The logical name of the entity.
            */
            entityType: string;

            /**
            * The id of the entity.
            */
            id: string;

            /**
            * The primary attribute value of the entity.
            */
            name?: string;
        }


    }
}