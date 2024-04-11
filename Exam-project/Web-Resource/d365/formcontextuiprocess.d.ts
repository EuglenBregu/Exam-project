
//Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-process

declare namespace D365 {
    export namespace Sdk {
        /**
         * Provides methods to interact with the business process flow control on a form.
         * */
        export interface FormContextUiProcess {
            /**
            * Retrieves the display state for the business process control.
            * Returns "expanded" or "collapsed" on the web client.
            * Returns "expanded", "collapsed", or "floating" on Unified Interface.
            */
            getDisplayState(): string;

            /**
            * Returns a value indicating whether the business process control is visible.
            */
            getVisible(): boolean;

            /**
            * Reflows the UI of the business process control.
            * @param updateUI Specify true to update the UI of the process control; false otherwise.
            * @param parentStage Specify the ID of the parent stage in the GUID format.
            * @param nextStage Specify the ID of the next stage in the GUID format.
            */
            reflow(updateUI: boolean, parentStage: string, nextStage: string): void;

            /**
            * Sets the display state of the business process control.
            * @param state Specify "expanded", "collapsed", or "floating".
            * The value "floating" is not supported on the web client.
            */
            setDisplayState(state: string): void;

            /**
            * Shows or hides the business process control.
            * @param visible Specify true to show the control; false to hide the control.
            */
            setVisible(visible: boolean): void;
        }

    }
}
