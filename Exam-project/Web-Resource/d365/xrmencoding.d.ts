
// Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-encoding

declare namespace D365 {
    export namespace Sdk {
        /**
        * Provides methods to encode and decode strings.
        */
        export interface XrmEncoding {
            /**
             * Encodes the specified string so that it can be used in an HTML attribute.
             * Returns the encoded string.
             * @param arg String to be encoded.
             */
            htmlAttributeEncode(arg: string): string;

            /**
             * Converts a string that has been HTML-encoded into a decoded string.
             * Returns the encoded string.
             * @param arg HTML-encoded string to be decoded.
             */
            htmlDecode(arg: string): string;

            /**
             * Converts a string to an HTML-encoded string.
             * Returns the encoded string.
             * @param arg String to be encoded.
             */
            htmlEncode(arg: string): string;

            /**
            * Encodes the specified string so that it can be used in an XML attribute.
            * Returns the encoded string.
            * @param arg String to be encoded.
            */
            xmlAttributeEncode(arg: string): string;

            /**
            * Converts a string to an XML-encoded string.
            * Returns the encoded string.
            * @param arg String to be encoded.
            */
            xmlEncode(arg: string): string;
        }
    }
}
