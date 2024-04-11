
//Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation

declare namespace D365 {
    export namespace Sdk {
        export interface NavigationItem {
            /**
             * Returns the name of the item.
            */
            getId(): string;

            /**
            * Returns the label for the item.
            */
            getLabel(): string;

            /**
            * Returns a value that indicates whether the item is currently visible.
            */
            getVisible(): boolean;

            /**
            * Sets the focus on the item.
            */
            setFocus(): void;

            /**
            * Sets the label for the item.
            */
            setLabel(label: string): void;

            /**
            * Sets a value that indicates whether the item is visible.
            */
            setVisible(visible: boolean): void;
        }
    }
}
