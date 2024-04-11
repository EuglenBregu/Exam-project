
/// <reference path="./collections.d.ts" />

//Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector

declare namespace D365 {
    export namespace Sdk {
        export interface FormSelectorItem {
            /**
             * Returns the ID of the form.
             */
            getId(): string;

            /**
             * Returns the label of the form.
             */
            getLabel(): string;

            /**
            * Opens the specified form.
            * When you use the navigate method while unsaved changes exist,
            * the user is prompted to save changes before the new form can be displayed.
            * The Onload event occurs when the new form loads.
            */
            navigate(): void;
        }

        export interface FormSelector {
            /**
            * A collection of all the form items accessible to the current user.
            * NOTE: this collection isn't available for Dynamics 365 for Customer Engagement apps mobile clients (phones and tablets).
            */
            items: Collection<FormSelectorItem>;

            /**
            * Returns a reference to the form currently being shown.
            * When only one form is available this method will return null.
            */
            getCurrentItem(): FormSelectorItem;
        }
    }
}
