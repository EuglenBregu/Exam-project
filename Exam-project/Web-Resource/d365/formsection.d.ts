
/// <reference path="./collections.d.ts" />
/// <reference path="./controls.d.ts" />
/// <reference path="./formtab.d.ts" />

// Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections

declare namespace D365 {
    export namespace Sdk {
        export interface FormSection {
            /**
            * Returns the collection of controls within the section
            */
            controls: Collection<Control>;

            /**
            * Returns the label for the section.
            */
            getLabel(): string;

            /**
            * Returns the name of the section.
            */
            getName(): string;

            /**
            * Returns the tab containing the section.
            */
            getParent(): FormTab;

            /**
            * Returns a value that indicates whether the section is currently visible.
            */
            getVisible(): boolean;

            /**
            * Sets the label of the section.
            * @param label The new label of the section.
            */
            setLabel(label: string): void;

            /**
            * Sets a value that indicates whether the section is visible.
            *@param visible Specify true to show the section; false to hide the section.
            */
            setVisible(visible: boolean): void;
        }
    }
}
