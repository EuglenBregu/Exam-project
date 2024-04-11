
declare namespace D365 {
    export namespace Sdk {
        /**
        * Provides access to the methods to determine which client is being used,
        * whether the client is connected to the server,
        * and what kind of device is being used.
        */
        export interface GlobalContextClient {
            /**
            * Returns a value to indicate which client the script is executing in.
            * The values returned are: 'Web', 'Outlook', 'Mobile'.
            */
            getClient(): string;

            /**
            * Returns a value to indicate the state of the client.
            * The values returned are: 'Online', 'Offline'.
            */
            getClientState(): string;

            /**
            * Returns information about the kind of device the user is using.
            * The values returned are: 0:unknown, 1:desktop, 2:tablet, 3:phone
            */
            getFormFactor(): number;

            /**
            * Returns information whether the server is online or offline.
            */
            isOffline(): boolean;
        }

        /**
        * Information about the current organization settings.
        */
        export interface GlobalContextOrganizationSettings {
            /**
            * Returns attributes and their values as key:value pairs
            * that are available for the organization entity.
            * Additional values will be available as attributes
            * if they are specified as attribute dependencies in the
            * web resource dependency list.
            * The key will be the attribute logical name.
            */
            attributes: { [key: string]: any };

            /**
            * Returns the ID of the base currency for the current organization.
            */
            baseCurrencyId: string;

            /**
            * Returns the default country/region code for phone numbers for the current organization.
            */
            defaultCountryCode: string;

            /**
            * Indicates whether the auto-save option is enabled for the current organization.
            */
            isAutoSaveEnabled: boolean;

            /**
            * Returns the preferred language ID for the current organization.
            */
            languageId: number;

            /**
            * Returns the ID of the current organization.
            */
            organizationId: string;

            /**
            * Returns the unique name of the current organization.
            */
            uniqueName: string;

            /**
            * Indicates whether the Skype protocol is used for the current organization.
            */
            useSkypeProtocol: boolean
        }

        /**
         * Information about the current user settings.
         * */
        export interface GlobalContextUserSettings {
            /**
            * Returns An object with informatiuon about date formatting
            * such as FirstDayOfWeek, LongDatePattern, MonthDayPattern, TimeSeparator, and so on.
            */
            dateFormattingInfo: object;

            /**
            * Returns the ID of the default dashboard for the current user.
            */
            defaultDashboardId: string;

            /**
            * Indicates whether guided help is enabled for the current user.
            */
            isGuidedHelpEnabled: boolean;

            /**
            * Indicates whether high contrast is enabled for the current user.
            */
            isHighContrastEnabled: boolean;

            /**
            * Indicates whether the language for the current user is a right-to-left (RTL) language.
            */
            isRTL: boolean;

            /**
            * Returns the language ID for the current user.
            */
            languageId: number;

            /**
            * Returns a collection of object that represent security role privilege that the user is associated with
            */
            roles: Collection<{ id: string, name: string }>;

            /**
            * Returns an array of strings that represent the GUID values
            * of each of the security role privilege that the user is associated with
            * or any teams that the user is associated with.
            */
            securityRolePrivileges: string[];

            /**
            * Returns an array of strings that represent the GUID values
            * of each of the security role that the useris associated with
            * or any teams that the user is associated with.
            */
            securityRoles: string[];

            /**
            * Returns the transaction currency ID for the current user.
            */
            transactionCurrencyId: string;

            /**
            * Returns the GUID of the SystemUser.Id value for the current user.
            */
            userId: string;

            /**
            * Returns the name of the current user.
            */
            userName: string;

            /**
            * Returns the difference in minutes between the local time
            * and Coordinated Universal Time (UTC).
            */
            getTimeZoneOffsetMinutes(): number;
        }

        /**
         * The properties of the current business app in Customer Engagement.
         * */
        export interface AppProperties {
            appId: string;
            displayName: string;
            uniqueName: string;
            url: string;
            webResourceId: string;
            webResourceName: string;
            welcomePageId: string;
            welcomePageName: string;
        }

        /**
         * The global context.
         * */
        export interface GlobalContext {
            /**
            * Returns information about the client.
            */
            client: GlobalContextClient;

            /**
            * Returns information about the current organization settings.
            */
            organizationSettings: GlobalContextOrganizationSettings;

            /**
            * Returns information about the current user settings.
            */
            userSettings: GlobalContextUserSettings;

            /**
            * Returns information about the advanced configuration settings for the organization.
            * @param setting Name of the configuration setting. Only the following two configuration settings are supported: "MaxChildIncidentNumber" and "MaxIncidentMergeNumber"
            */
            // TODO verificare il valore restituito
            getAdvancedConfigSetting(setting: string): any;

            /**
            * Returns the base URL that was used to access the application.
            */
            getClientUrl(): string;

            /**
            * Returns the name of the current business app in Customer Engagement.
            */
            getCurrentAppName(): Promise<string>;

            /**
            * Returns the properties of the current business app in Customer Engagement.
            */
            getCurrentAppProperties(): Promise<AppProperties>;

            /**
            * Returns the URL of the current business app in Customer Engagement.
            */
            getCurrentAppUrl(): string;

            /**
            * Returns the version number of the Dynamics 365 Customer Engagement instance.
            * For example: "9.0.0.1103"
            */
            getVersion(): string;

            ///**
            //* Returns a string representing the current theme name in the application.
            //*/
            //getCurrentTheme(): string;

            /**
            * Returns a boolean value indicating if the Customer Engagement instance
            * is hosted on-premises or online.
            */
            isOnPremises(): boolean;

            /**
            * Prefixes the current organization's unique name to a string, typically a URL path.
            * Returns a path string in the following format: "/" + orgName + path
            * @param path A local path to a resource.
            */
            prependOrgName(path: string): string;
        }

    }
}
