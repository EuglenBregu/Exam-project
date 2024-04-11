
/// <reference path="./collections.d.ts" />
/// <reference path="./navigationitem.d.ts" />

//Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui

declare namespace D365 {
    export namespace Sdk {
        /**
        * Provides properties and methods to retrieve information about the user interface (UI)
        * as well as collections for several subcomponents of the form.
        */
        export interface FormContextUiNavigation {

            /**
            * A collection of all the navigation items on the page.
            */
            items: Collection<NavigationItem>;
        }

    }
}
