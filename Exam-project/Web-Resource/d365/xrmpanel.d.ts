
// Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-panel

declare namespace D365 {
    export namespace Sdk {
        /**
        * Provides a method to display a web page in the side pane of Customer Engagement form.
        */
        export interface XrmPanel {
            /**
            * Displays the web page represented by a URL in the static area in the side pane,
            * which appears on all pages in the Dynamics 365 Customer Engagement web client.
            * @param url URL of the page to be loaded in the side pane static area.
            * @param title Title of the side pane static area.
            */
            loadPanel(url: string, title: string): void;
        }
    }
}
