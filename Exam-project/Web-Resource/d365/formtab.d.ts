
/// <reference path="./collections.d.ts" />
/// <reference path="./formsection.d.ts" />
/// <reference path="./executioncontext.d.ts" />

// Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs

declare namespace D365 {
    export namespace Sdk {
        export interface FormTab {
            /**
            * The sections collection provides access to sections within the tab.
            */
            sections: Collection<FormSection>;

            /**
             *Adds a function to be called when the TabStateChange event occurs.
             * @param myFunction The function to be executed on the TabStateChange event. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function.
             */
            addTabStateChange(myFunction: (context: ExecutionContext) => void): void;

            /**
            * Gets display state of the tab. Returns "expanded" or "collapsed".
            */
            getDisplayState(): string;

            /**
            * Returns the label for the tab.
            */
            getLabel(): string;

            /**
            * Returns the name of the tab.
            */
            getName(): string;

            /**
            * Returns the formContext.ui object containing the tab.
            */
            getParent(): FormContextUi;

            /**
            * Returns a value that indicates whether the tab is currently visible.
            */
            getVisible(): boolean;

            /**
             * Removes a function to be called when the TabStateChange event occurs.
             * @param myFunction The function to be removed from the TabStateChange event.
             */
            removeTabStateChange(myFunction: (context: ExecutionContext) => void): void;

            /**
            * Sets display state of the tab. Valid values: "expanded", "collapsed".
            */
            setDisplayState(state: string): void;

            /**
            * Sets the focus on the tab.
            */
            setFocus(): void;

            /**
            * Sets the label of the tab.
            * @param label The new label of the tab.
            */
            setLabel(label: string): void;

            /**
            * Sets a value that indicates whether the tab is visible.
            *@param visible Specify true to show the tab; false to hide the tab.
            */
            setVisible(visible: boolean): void;
        }
    }
}
