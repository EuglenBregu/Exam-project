
// Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device

declare namespace D365 {
    export namespace Sdk {
        export interface CaptureImageOptions {
            /**
            * Indicates whether to edit the image before saving.
            */
            allowEdit: boolean;

            /**
            * Height of the image to capture.
            */
            height: number;

            /**
            *  Indicates whether to capture image using the front camera of the device.
            */
            preferFrontCamera: boolean;

            /**
            * Quality of the image file in percentage.
            */
            quality: number;

            /**
            * Width of the image to capture.
            */
            width: number;
        }



        export interface PickFileOptions {
            /**
            * Image file types to select. Valid values are "audio", "video", or "image".
            */
            accept: string;

            /**
            * Indicates whether to allow selecting multiple files.
            */
            allowMultipleFiles: boolean;

            /**
            * Maximum size of the files(s) to be selected.
            */
            maximumAllowedFileSize: number;
        }

        export interface FileInfo {
            /**
             * Contents of the file.
             * */
            fileContent: string;

            /**
             * Name of the file.
             * */
            fileName: string;

            /**
             * Size of the file in KB.
             * */
            fileSize: number;

            /**
             * File MIME type.
             * */
            mimeType: string;
        }

        export interface GeoLocation {
            /**
            * Contains a set of geographic coordinates
            * along with associated accuracy as well as a set of other optional attributes
            * such as altitude and speed.
            */
            coords: Position;

            /**
            * Represents the time when the object was acquired and is represented as DOMTimeStamp
            */
            timestamp: DOMTimeStamp;
        }

        export interface Position {
            latitude: number;
            longitude: number;
            accuracy: number;
            altitude: number;
            altitudeAccuracy: number;
            heading: number;
            speed: number;
        }

        /**
        * Provides methods to use native device capabilities of mobile devices.
        */
        export interface XrmDevice {
            /**
             * Invokes the device microphone to record audio.
             * This method is supported only for the mobile clients.
            */
            captureAudio(): Promise<FileInfo>;

            /**
             *Invokes the device camera to capture an image.
             * This method is supported only for the mobile clients.
            */
            captureImage(imageOptions: CaptureImageOptions): Promise<FileInfo>;

            /**
             * Invokes the device camera to record video.
             * This method is supported only for the mobile clients.
            */
            captureVideo(): Promise<FileInfo>;

            /**
            * Invokes the device camera to scan the barcode information, such as a product number.
            * This method is supported only for the mobile clients.
            */
            getBarcodeValue(): Promise<string>;

            /**
            * Returns the current location using the device geolocation capability.
            */
            getCurrentPosition(): Promise<GeoLocation>;

            /**
            * Opens a dialog box to select files from your computer (web client) or mobile device (mobile clients).
            */
            pickFile(options: PickFileOptions): Promise<FileInfo[]>;
        }
    }
}
