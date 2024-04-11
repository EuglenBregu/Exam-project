/// <reference path="./entityreference.d.ts" />
/// <reference path="./attributes.d.ts" />
/// <reference path="./collections.d.ts" />
/// <reference path="./formsection.d.ts" />
/// <reference path="./xrmnavigation.d.ts" />

// Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls

declare namespace D365 {
    export namespace Sdk {
        export interface NotificationAction {
            /**        
            * The secondary or body message of the notification to be displayed to the user.
            * Limit your message to 100 characters for optimal user experience.
            */
            message: string;

            /**        
             * The corresponding actions for the message.
             */
            actions: (VoidFunction)[];
        }

        export interface Notification {
            /**        
            * In the current release, only single body message and corresponding action are supported.
            * However, you can define multiple tasks to be performed using JavaScript code in the actions block.
            */
            actions: NotificationAction[];

            /**
             * The message to display in the notification.
             * In the current release, only the first message specified in this array will be displayed.
             * The string that you specify here appears as bold text in the notification,
             * and is typically used for title or subject of the notification.
             * You should limit your message to 50 characters for optimal user experience.
             */
            messages: string[];

            /**      
             * Defines the type of notification. Valid values are 'ERROR' or 'RECOMMENDATION'.
             * If you do not specify this attribute in your object definition, it is set to 'ERROR' by default.
             */
            notificationLevel?: string;

            /**        
             * The ID to use to clear this notification when using clearNotification.
             */
            uniqueId?: string;
        }

        export interface Control {
            /**
             * Displays an error or recommendation notification for a control, and lets you specify actions to execute based on the notification.
             * When you specify an error type of notification, a red "X" icon appears next to the control.
             * When you specify a recommendation type of notification, an "i" icon appears next to the control.
             * On Dynamics 365 mobile clients, tapping on the icon will display the message, and let you perform the configured action by clicking the Apply button or dismiss the message.
             * Returns a boolean: indicates whether the method succeeded.
             */
            addNotification(notification: Notification): boolean;

            /**
             * Remove a message already displayed for a control.
             * @param uniqueId The ID to use to clear a specific message that was set using setNotification or addNotification. If the uniqueId parameter isn’t specified, the current notification shown will be removed.
             */
            clearNotification(uniqueId?: string): void;

            /**
             * Returns the attribute that the control is bound to.
             * Controls that aren’t bound to an attribute (subgrid, web resource, and IFRAME)
             * don’t have this method. An error will be thrown if you attempt to use this method
             * on one of these controls.
             */
            getAttribute(): Attribute;

            /**
             * Returns a value that categorizes controls.
             * This method will return one of the following string values:
             * standard, iframe, kbsearch, lookup, multiselectoptionset, notes,
             * optionset, quickform, subgrid, timercontrol, timelinewall, webresource,
             * customcontrol:<namespace>.<name>, customsubgrid:<namespace>.<name>
             */
            getControlType(): string;

            /**
             * Returns a value that indicates whether the control is disabled.
             */
            getDisabled(): boolean;

            /**
             * Returns the label for the control.
             */
            getLabel(): string;

            /**
             * Returns the name assigned to the control.
             */
            getName(): string;

            /**
             * Returns a reference to the section object that contains the control.
             */
            getParent(): FormSection;

            /**
             * Returns a value that indicates whether the control is currently visible.
             */
            getVisible(): boolean;

            /**
             * Sets a value that indicates whether the control is disabled.
             * @param value True if the control should be disabled, otherwise false.
             */
            setDisabled(value: boolean): void;

            /**
             * Sets the focus on the control.
             */
            setFocus(): void;

            /**
             * Sets the label for the control.
             *@param label The new label for the control.
             */
            setLabel(label: string): void;

            /**
             * Display a message near the control to indicate that data isn’t valid. When this method is used on Microsoft Dynamics CRM for tablets a red "X" icon appears next to the control. Tapping on the icon will display the message.
             * @param message The message to display.
             * @param uniqueId The ID to use to clear just this message when using clearNotification. Optional.
            */
            setNotification(message: string, uniqueId?: string): void;

            /**
             * Sets a value that indicates whether the control is visible.
             * @param value True if the control should be visible; otherwise, false.
             */
            setVisible(value: boolean): void;
        }

        export interface IFrameControl extends Control {
            /**
             * Returns the default URL that an IFRAME control is configured to display.
             * This method is not available for web resources.
             */
            getInitialUrl(): string;

            /**
             * Returns the object in the form representing an IFrame or Web resource.
             * An IFRAME returns the IFrame element from the Document Object Model (DOM).
             * A Silverlight web resource will return the Object element from the DOM that represents the embedded Silverlight plug-in.
             */
            getObject(): HTMLIFrameElement;

            /**
             * Returns the current URL being displayed in an IFRAME.
             */
            getSrc(): string;

            /**
             * Sets the URL to be displayed in an IFrame.
             * @param value The URL.
             */
            setSrc(value: string): void;
        }

        /**
         * Note: when the knowledge base search control is added to the social pane, the name of the control will be "searchwidgetcontrol_notescontrol". This name can’t be changed.
        */
        export interface KbSearchControl extends Control {
            /**
             * Adds an event handler to the PostSearch event.
             * @param myFunction The function to add to the PostSearch event. The execution context is automatically passed as the first parameter to this function.
             */
            addOnPostSearch(myFunction: (context: ExecutionContext) => void): void;

            /**
             * Adds an event handler to the OnResultOpened event.
             * @param myFunction The function to add to the OnResultOpened event. The execution context is automatically passed as the first parameter to this function.
             */
            addOnResultOpened(myFunction: (context: ExecutionContext) => void): void;

            /**
             * Adds an event handler to the OnSelection event.
             * @param myFunction The function to add to the OnSelection event. The execution context is automatically passed as the first parameter to this function.
             */
            addOnSelection(myFunction: (context: ExecutionContext) => void): void;

            /**
             * Gets the text used as the search criteria for the knowledge base management control.
            */
            getSearchQuery(): string;


            /**
             * Under contruction.
            */
            // TODO: 2018.01.30 verificare specs https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getselectedresults
            getSelectedResults(): void;

            /**
            * Gets the count of results found in the search control.
            */
            getTotalResultCount(): number;

            /**
             * Opens a search result in the search control by specifying the result number.
             * Returns 1 if successful; 0 if unsuccessful. The method will return -1 if the specified resultNumber value is not present, or if the specified mode value is invalid.
             * @param resultNumber Numerical value specifying the result number to be opened. Result number starts from 1.
             * @param mode Specify "Inline" or "Popout". If you do not specify a value for the argument, the default ("Inline") option is used.
            */
            openSearchResult(resultNumber: number, mode?: string): boolean;

            /**
             * Removes an event handler from the PostSearch event.
             * @param myFunction The function to remove from the PostSearch event.
             */
            removeOnPostSearch(myFunction: (context: ExecutionContext) => void): void;

            /**
            * Removes an event handler from the OnResultOpened event.
            * @param myFunction The function to remove from the OnResultOpened event.
            */
            removeOnResultOpened(myFunction: (context: ExecutionContext) => void): void;

            /**
             * Removes an event handler from the OnSelection event.
             * @param myFunction The function to remove from the OnSelection event.
             */
            removeOnSelection(myFunction: (context: ExecutionContext) => void): void;


            /**
             * Sets the text used as the search criteria for the knowledge base search control.
             * @param searchString The text for the search query.
            */
            setSearchQuery(searchString: string): void;
        }

        export interface LookupControl extends Control {
            /**       
             * Use to add filters to the results displayed in the lookup. Each filter will be combined with any previously added filters as an “AND” condition.
             * @param filter The fetchXml filter element to apply.
             * @param entityLogicalName (Optional) If this is set, the filter only applies to that entity type. Otherwise, it applies to all types of entities returned.
             */
            addCustomFilter(filter: string, entityLogicalName?: string): void;

            /**
             * Adds a new view for the lookup dialog.
             * @param viewId The string representation of a GUID for a view.
             * @param entityName The name of the entity.
             * @param viewDisplayName The name of the view.
             * @param fetchXml The fetchXml query for the view.
             * @param layoutXml The XML that defines the layout of the view
             * @param isDefault Whether the view should be the default view.
             */
            addCustomView(viewId: string, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean): void;

            /**       
             * Use this method to apply changes to lookups based on values current just as the user is about to view results for the lookup.
             * @param myFunction The function that will be run just before the search to provide results for a lookup occurs. You can use this function to call one of the other lookup control functions and improve the results to be displayed in the lookup. The execution context is automatically passed as the first parameter to this function.
             */
            addPreSearch(myFunction: (context: ExecutionContext) => void): void;

            /**       
            * Use this method to remove event handler functions that have previously been set for the PreSearch event.
            * @param handler Function to remove.
            */
            removePreSearch(myFunction: (context: ExecutionContext) => void): void;

            /**       
             * Returns the ID value of the default lookup dialog view.
             */
            getDefaultView(): string;

            /**
             * Gets the types of entities allowed in the lookup control.
             * Returns the logical names of the entities allowed in this control.
            */
            getEntityTypes(): string[];

            /**       
             * Sets the default view for the lookup control dialog.
             * @param viewGuid The ID value of the default view.
             */
            setDefaultView(viewGuid: string): void;

            /**
            * Sets the types of entities allowed in the lookup control.
            * @param entityLogicalNames The logical names of the entities allowed in this control.
            */
            setEntityTypes(entityLogicalNames: string[]): void;

        }

        export interface OptionSetItem {
            /**
            * The value for the option.
            */
            value: number;

            /**
            * The label for the option.
            */
            text: string;
        }

        export interface OptionSetControl extends Control {
            /**
            * Adds an option to an Option set control.
            * @param option An option object to add to the OptionSet.
            * @param index The index position to place the new option in. If not provided, the option will be added to the end.
            */
            addOption(option: OptionSetItem, index?: number): void;


            /**
             * Clears all options from an Option Set control.
             */
            clearOptions(): void;

            /**
             * Removes an option from an Option Set control.
             * @param value The value of the option you want to remove.
             */
            removeOption(value: number): void;
        }

        export interface MultiSelectOptionSetControl extends OptionSetControl {
        }

        export interface QuickFormControl extends Control {
            /**
             * Gets the constituent controls in a quick view control.
             */
            getControl(): Collection<Control>;

            /**
             * Gets the constituent controls in a quick view control.
             * @param index Index of the constituent control in a quick view control.
             */
            getControl(index: number): Control;

            /**
             * Gets the constituent controls in a quick view control.
             * @param name Name of the constituent control in a quick view control.
             */
            getControl(name: string): Control;

            /**
             * Returns whether the data binding for the constituent controls in a quick view control is complete.
             */
            isLoaded(): boolean;

            /**
             * Refreshes the data displayed in a quick view control.
             */
            refresh(): void;
        }

        export interface GridControl extends Control {
            /**
             * Adds an event handlers to the GridControl OnLoad event (read-only grid).
             * @param callback The function to be executed when the subgrid loads. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function.
             */
            addOnLoad(callback: (context: ExecutionContext) => void): void;

            /**
            * Gets the logical name of the entity data displayed in the grid.
            */
            getEntityName(): string;

            /**
             * Gets the FetchXML query that represents the current data, including filtered and sorted data, in the grid control.
             */
            getFetchXml(): string;

            /**
             * Get access to the Grid available in the GridControl.
             */
            getGrid(): Grid;

            /**
             * Gets the grid type (grid or subgrid).
             * Returns one of the following values: 1:HomePageGrid, 2:Subgrid
             */
            getGridType(): number;

            /**
             * Gets information about the relationship used to filter the subgrid.
             */
            getRelationship(): Relationship;

            /**
             * Gets the URL of the current grid control.
             * @param {number} client Indicates the client type. You can specify one of the following values: 0:Browser, 1:MobileApplication
             */
            getUrl(client: number): string;

            /**
             * Use this method to access the ViewSelector methods available for the grid control (read-only grid).
             */
            getViewSelector(): ViewSelector;

            /**
             * Displays the the associated grid for the grid.
             * This method does nothing if the grid is not filtered based on a relationship.
             */
            openRelatedGrid(): void;

            /**
             * Custom filter on subgrid fetch.
             */
            setFilterXml(xml: string): void;

            /**
             * Refreshes the grid.
             */
            refresh(): void;

            /**
             * Refreshes the ribbon rules for the grid control.
             */
            refreshRibbon(): void;

            /**
             * Removes event handlers from the Subgrid OnLoad event event.
             * @param callback The function to be removed from the OnLoad event.
             */
            removeOnLoad(callback: (context: ExecutionContext) => void): void;
        }

        /**
         * Grid is returned by the gridContext.getGrid method. Use Grid methods to access information about data in the grid.
         */
        export interface Grid {
            /**
             * Returns a collection of every GridRow in the Grid.
             */
            getRows(): Collection<GridRow>;

            /**
             * Returns a collection of every selected GridRow in the Grid.
             */
            getSelectedRows(): Collection<GridRow>;

            /**
             * Returns the total number of records that match the filter criteria of the view, not limited by the number visible in a single page.
             */
            getTotalRecordCount(): number;
        }

        export interface GridRow {
            /**
             * A collection containing the GridRowData for the GridRow.
             */
            data: GridRowData;
        }

        export interface GridRowData {
            /**
             * Returns the GridEntity for the GridRowData.
             */
            entity: GridEntity;
        }

        /**
         * Use the GridEntity methods to access data about the specific records in the rows.
         */
        export interface GridEntity {
            /**
             * Returns the logical name for the record in the row.
             */
            getEntityName(): string;

            /**
             * Returns a Lookup value that references the record in the row.
             */
            getEntityReference(): EntityReference;

            /**
             * Returns the Id for the record in the row.
             */
            getId(): string;

            /**
             * Returns the primary attribute value for the record in the row.
             */
            getPrimaryAttributeValue(): string;
        }

        /**
         * Provides methods to get or set information about the view selector of the subgrid control.
         * If the subgrid control is not configured to display the view selector, calling the ViewSelector methods will throw an error.
         */
        export interface ViewSelector {
            /**
             * Gets a reference to the current view.
             */
            getCurrentView(): EntityReference;

            /**
             * Returns a boolean value to indicate whether the view selector is visible.
             */
            isVisible(): boolean;

            /**
             * Sets the current view.
             * @param {EntityReference} viewId The view id.
             */
            setCurrentView(viewId: EntityReference): void;
        }


        /**
        * The timeline control presents the Posts, Activities, and Notes in a unified view.
        */
        export interface TimelineWallControl extends Control {
            /**
            * Refreshes the data displayed in a timelinewall control.
            */
            refresh(): void;
        }

        export interface TimerControl extends Control {
            /**
            * Returns the state of the timer control.
            * Returns one of the following values:
            *  1: Not Set
            *  2: In Progress
            *  3: Warning
            *  4: Violated
            *  5: Success
            *  6: Expired
            *  7: Canceled
            *  8: Paused
            */
            getState(): number;

            /**
            * Refreshes the data displayed in a timer control.
            */
            refresh(): void;
        }

        export interface WebResourceControl extends IFrameControl {
        }
    }
}