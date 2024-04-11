
/// <reference path="entityreference.d.ts" />

// Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation

declare namespace D365 {
    export namespace Sdk {
        export interface EntityList {
            /**
             * Specify "entitylist".
             */
            pageType: string;

            /**
             * The logical name of the entity to load in the list control.
             */
            entityName: string;

            /**
             * The ID of the view to load.If you don't specify it, navigates to the default main view for the entity.
             */
            viewId?: string;

            /**
             * Type of view to load.Specify "savedquery" or "userquery".
             */
            viewType?: string;
        }

        export interface EntityRecord {
            /**
             * Specify "entityrecord".
             */
            pageType: string;

            /**
             * Logical name of the entity to display the form for.
             */
            entityName: string;

            /**
             * ID of the entity record to display the form for"
             * If you don't specify this value, the form will be opened in create mode.
             */
            entityId?: string;

            /**
             * Designates a record that will provide default values based on mapped attribute values.
             */
            createFromEntity?: EntityReference;

            /**
             * A dictionary object that passes extra parameters to the form.
             * Invalid parameters will cause an error.
             */
            data?: object;

            /**
             * ID of the form instance to be displayed.
             */
            formId?: string;

            /**
             * Indicates whether the form is navigated to from a different entity using cross-entity business process flow.
             */
            isCrossEntityNavigate?: boolean;

            /**
             * Indicates whether there are any offline sync errors.
             */
            isOfflineSyncError?: boolean;

            /**
             * ID of the business process to be displayed on the form.
             */
            processId?: string;

            /**
             * ID of the business process instance to be displayed on the form.
             */
            processInstanceId?: string;

            /**
             * Define a relationship object to display the related records on the form. The object has the following attributes.
             */
            relationship?: Relationship;
        }

        export interface HtmlWebResource {
            /**
             * Specify "webresource".
             */
            pageType: string;
            /**
             * The name of the web resource to load.
             */
            webresourceName: string;
            /**
             * The data to pass to the web resource.
             */
            data: string;
        }

        export interface NavigationOptions {
            /**
             * Specify 1 to open the page inline; 2 to open the page in a dialog.
             *  Also, rest of the attributes (width, height, and position) are valid only if you have specified 2 in this attribute.
             */
            target: number;
            /**
             * The width of dialog. To specify the width in pixels, just type a numeric value.
             */
            width?: number | SizeValue;
            /**
             * The height of dialog. To specify the height in pixels, just type a numeric value.
             */
            height?: number | SizeValue;
            /**
             * Specify 1 to open the dialog in center; 2 to open the dialog on the side. 
             * Default is 1 (center).
             */
            position?: number;
        }

        export interface SizeValue {
            value: number;
            unit: string;
        }

        export interface OpenDialogOptions {
            /**
            * Height of the alert dialog in pixels.
            */
            height?: number;

            /**
            * Width of the alert dialog pixels.
            */
            width?: number;
        }

        export interface OpenWebResourceOptions extends OpenDialogOptions {
            /**
            * Indicates whether to open the web resource in a new window.
            */
            openInNewWindow: boolean;
        }

        /**
         * An object to specify the options for error dialog.
         * You must set either the errorCode or message attribute.
        */
        export interface OpenErrorDialogOptions {
            /**
             * Details about the error. When you specify this, the Download Log File button
             * is available in the error message, and clicking it will let users
             * download a text file with the content specified in this attribute.
            */
            details?: string;

            /**
            * The error code. If you just set errorCode, the message for the error code
            * is automatically retrieved from the server and displayed in the error dialog.
            * If you specify an invalid errorCode value, an error dialog with a default
            * error message is displayed.
            */
            errorCode?: number;

            /**
            * The message to be displayed in the error dialog.
            */
            message?: string;
        }

        export interface OpenFileOption {
            /**
             * Specify whether to open (1) or save (2) the file.
             * */
            openMode: number;
        }

        export interface AlertStrings {
            /**
            * The confirm button label. If you do not specify the button label,
            * OK is used as the button label.
            */
            confirmButtonLabel?: string;

            /**
            * The message to be displyed in the alert dialog.
            */
            text: string;
        }

        export interface ConfirmStrings {
            /**
            * The cancel button label. If you do not specify the cancel button label,
            * Cancel is used as the button label.
            */
            cancelButtonLabel?: string;

            /**
            * The confirm button label. If you do not specify the button label,
            * OK is used as the button label.
            */
            confirmButtonLabel?: string;

            /**
            * The subtitle to be displayed in the confirmation dialog.
            */
            subtitle?: string;

            /**
            * The message to be displyed in the confirmation dialog.
            */
            text: string;

            /**
            * The title to be displyed in the confirmation dialog.
            */
            title?: string;
        }

        export interface ConfirmDialogResult {
            /**
            *  indicates whether the confirm button was clicked to close the dialog.
            */
            confirmed: boolean;
        }

        export interface OpenFormOptions {
            /**
            *  Indicates whether to display the command bar.
            * If you do not specify this parameter,
            * the command bar is displayed by default.
            */
            cmdbar?: boolean;

            /**
            * Designates a record that will provide default values
            * based on mapped attribute values.
            */
            createFromEntity?: EntityReference;

            /**
            * ID of the entity record to display the form for.
            */
            entityId?: string;

            /**
            *  Logical name of the entity to display the form for.
            */
            entityName?: string;

            /**
            * ID of the form instance to be displayed.
            */
            formId?: string;

            /**
            * Height of the form window to be displayed in pixels.
            */
            height?: number;

            /**
            * Controls whether the navigation bar is displayed
            * and whether application navigation is available
            * using the areas and subareas defined in the sitemap.
            * Valid values are: "on" (default), "off", or "entity".
            * Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openform
            */
            navBar?: string;

            /**
            * Indicates whether to display form in a new window.
            */
            openInNewWindow?: boolean;

            /**
            * Specify one of the following values for the window position
            * of the form on the screen: 1:center, 2:side
            */
            windowPosition?: number;

            /**
            * ID of the business process to be displayed on the form.
            */
            processId?: string;

            /**
            * ID of the business process instance to be displayed on the form.
            */
            processInstanceId?: string;

            /**
            * Define a relationship object to display the related records on the form.
            */
            relationship?: Relationship;

            /**
            * ID of the selected stage in business process instance.
            */
            selectedStageId?: string;

            /**
            * Indicates whether to open a quick create form.
            */
            useQuickCreateForm?: boolean;

            /**
            * Width of the form window to be displayed in pixels.
            */
            width?: number;
        }

        export interface OpenFormResult {
            savedEntityReference: EntityReference;
        }

        export interface Relationship {
            /**
            * Name of the attribute used for relationship.
            */
            attributeName: string;

            /**
            * Name of the relationship.
            */
            name: string;

            /*
            * Name of the navigation property for this relationship.
            */
            navigationPropertyName: string;

            /*
            * Relationship type. Specify one of the following values:
            * 1:OneToMany, 2:ManyToMany
            */
            relationshipType: number

            /**
            * Role type in relationship. Specify one of the following values:
            * 1:Referencing, 2:AssociationEntity
            */
            roleType: number;
        }

        /**
        * Provides navigation-related methods.
        */
        export interface XrmNavigation {
            /**
             * Navigates to the specified entity list, entity record, or HTML web resource.
             * @param pageInput Input about the page to navigate to. The object definition changes depending on the type of page to navigate to.
             * @param navigationOptions Options for navigating to a page.
             * */
            navigateTo(pageInput: EntityList | EntityRecord | HtmlWebResource, navigationOptions?: NavigationOptions): Promise<void>


            /**
            * Displays an alert dialog containing a message and a button.
            * @param alertStrings The strings to be used in the alert dialog.
            * @param options The height and width options for alert dialog.
            */
            openAlertDialog(alertStrings: AlertStrings, options?: OpenDialogOptions): Promise<object>;

            /**
            * Displays a confirmation dialog box containing a message and two buttons.
            * @param confirmStrings The strings to be used in the confirmation dialog.
            * @param options The height and width options for confirmation dialog.
            */
            openConfirmDialog(confirmStrings: ConfirmStrings, options?: OpenDialogOptions): Promise<ConfirmDialogResult>;

            /**
            * Displays an error dialog.
            * @param options An object to specify the options for error dialog.
            */
            openErrorDialog(options: OpenErrorDialogOptions): Promise<void>;

            /**
             * Opens a file.
             * @param file An object describing the file to open.
             * @param options An object to specify whether open (1) or save (2) the file. If you do not specify this parameter, by default 1 (open) is passed.
            */
            openFile(file: FileInfo, options?: OpenFileOption): void;

            /**
            * Opens an entity form or a quick create form.
            * @param options Entity form options for opening the form.
            * @param parameters A dictionary object that passes extra parameters to the form. See https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/set-field-values-using-parameters-passed-form
            */
            openForm(options: OpenFormOptions, parameters?: object): Promise<OpenFormResult>;

            /**
            * Opens a URL, including file URLs.
            * @param url URL to open.
            * @param options Options to open the URL.
            */
            openUrl(url: string, options?: OpenDialogOptions): void;

            /**
            * Opens an HTML web resource.
            * @param webResourceName Name of the HTML web resource to open.
            * @param options Window options for opening the web resource.
            * @param data Data to be passed into the data parameter.
            */
            openWebResource(webResourceName: string, options?: OpenWebResourceOptions, data?: string): void;
        }
    }
}
