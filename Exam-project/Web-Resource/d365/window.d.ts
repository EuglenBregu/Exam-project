
///<reference path="./xrmdevice.d.ts" />
///<reference path="./xrmnavigation.d.ts" />
///<reference path="./xrmencoding.d.ts" />
///<reference path="./xrmpanel.d.ts" />
///<reference path="./xrmutility.d.ts" />
///<reference path="./xrmwebapi.d.ts" />
///<reference path="./formcontext.d.ts" />

declare namespace D365 {
    export namespace Sdk {

        export interface WindowXrm {
            /**
            * Provides methods to use native device capabilities of mobile devices.
            */
            Device: D365.Sdk.XrmDevice;

            /**
            * Provides methods to encode strings.
            */
            Encoding: D365.Sdk.XrmEncoding;

            /**
            * Provides navigation-related methods.
            */
            Navigation: D365.Sdk.XrmNavigation;

            /**
            * Provides a method to display a web page in the side pane of Customer Engagement form.
            */
            Panel: D365.Sdk.XrmPanel;

            /**
            * Provides a container for useful methods.
            */
            Utility: D365.Sdk.XrmUtility;

            /**
            * Provides properties and methods to use Web API
            * to create and manage records and execute Web API actions and functions
            * in Customer Engagement.
            */
            WebApi: D365.Sdk.XrmWebApi;

            /**
             * Deprecated? https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated
             * Tip: use *ONLY* to access form elements from embedded HTML web resource.
             */
            Page: D365.Sdk.FormContext;
        }
    }
}

interface Window {
    Xrm: D365.Sdk.WindowXrm
}
