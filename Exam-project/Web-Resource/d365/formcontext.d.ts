
/// <reference path="./formcontextdata.d.ts" />
/// <reference path="./formcontextui.d.ts" />

//Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data

declare namespace D365 {
    export namespace Sdk {
        /**
        * Provides properties and methods to work with the form.
        */
        export interface FormContext {
            /**
            * Provides properties and methods to work with the data on a form.
            */
            data: FormContextData;

            /**
            * Provides properties and methods to retrieve information
            * about the user interface (UI) as well as collections
            * for several subcomponents of the form.
            */
            ui: FormContextUi;

            /**
             * Gets a control on the form.
             * The formContext.getControl(arg) method is a shortcut method to access formContext.ui.controls.get.
             * @param arg You can access a control on a form by passing an argument as either the name or the index value of the control on a form.
             */
            getControl(arg: string | number): D365.Sdk.Control;
        }
    }
}
