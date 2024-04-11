
/// <reference path="./collections.d.ts" />
/// <reference path="./controls.d.ts" />
/// <reference path="./formtab.d.ts" />
/// <reference path="./formselector.d.ts" />
/// <reference path="./formcontextuiprocess.d.ts" />
/// <reference path="./formcontextuinavigation.d.ts" />

//Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui

declare namespace D365 {
    export namespace Sdk {
        /**
        * Provides properties and methods to retrieve information about the user interface (UI)
        * as well as collections for several subcomponents of the form.
        */
        export interface FormContextUi {
            /**
            * Collection of all the controls on the page.
            */
            controls: Collection<Control>;

            /**
            * Use the formSelector.getCurrentItem method to retrieve information about the form currently in use.
            * Use the formSelector.items collection to return information about all the forms available for the user.
            * formSelector is not available for Microsoft Dynamics 365 for tablets.
            */
            formSelector: FormSelector;

            /**
            * An object containing a collection of all the navigation items on the page.
            */
            navigation: FormContextUiNavigation;

            /**
            * Provides objects and methods to interact with the business process flow control on a form.
            */
            process: FormContextUiProcess;

            /**
            * A collection of all the quick view controls on a form using the new form rendering engine (also called "turbo forms").
            */
            quickForms: Collection<QuickFormControl>;

            /**
            * A collection of all the tabs on the page.
            */
            tabs: Collection<FormTab>;

            /**
             * Adds a function to be called on the form OnLoad event.
             * @param myFunction The function to be executed on the form OnLoad event. The function will be added to the bottom of the event handler pipeline.
             */
            addOnLoad(myFunction: (context: ExecutionContext) => void): void;

            /**
             * Removes form level notifications.
             *Returns true if the method succeeded, false otherwise.
             *@param uniqueId A unique identifier for the message to be cleared that was set using the setFormNotification method.
            */
            clearFormNotification(uniqueId: string): boolean;

            /**
            * Closes the form.
            */
            close(): void;

            /**
            * Gets the form type for the record.
            * 0:Undefined, 1:Create, 2:Update, 3:Read Only, 4:Disabled, 6:Bulk Edit
            */
            getFormType(): number;

            /**
            * Gets the height of the viewport in pixels.
            * The viewport is the area of the page containing form data.
            * It corresponds to the body of the form and does not include
            * the navigation, header, footer or form assistant areas of the page.
            */
            getViewPortHeight(): number;

            /**
             * Get the width of the viewport in pixels.
             * The viewport is the area of the page containing form data.
             * It corresponds to the body of the form and does not include
             * the navigation, header, footer or form assistant areas of the page.
            */
            getViewPortWidth(): number;

            /**
            * Causes the ribbon to re-evaluate data that controls what is displayed in it.
            * @param refreshAll Indicates whether all the ribbon command bars on the current page are refreshed. If you specify false, only the page-level ribbon command bar is refreshed. If you do not specify this parameter, by default false is passed.
            */
            refreshRibbon(refreshAll?: boolean): void;

            /**
             * Removes a function from the form OnLoad event.
             * @param myFunction The function to be removed from the form OnLoad event.
             */
            removeOnLoad(myFunction: (context: ExecutionContext) => void): void;

            /**
             * Sets the name of the entity to be displayed on the form.
             * @param entityLogicalName Name of the entity to be displayed on the form.
             */
            setFormEntityName(entityLogicalName: string): void;

            /**
            * Displays form level notifications.
            * Returns true if the method succeeded; false otherwise.
            * @param message The text of the message.
            * @param level The level of the message. Valid values: INFO, WARNING, ERROR
            * @param uniqueId A unique identifier for the message that can be used later with clearFormNotification to remove the notification.
            */
            setFormNotification(message: string, level: string, uniqueId: string): boolean;

        }

    }
}
