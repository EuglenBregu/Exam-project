/// <reference path="./entityreference.d.ts" />
/// <reference path="./collections.d.ts" />
/// <reference path="./controls.d.ts" />
/// <reference path="./executioncontext.d.ts" />
/// <reference path="./formcontextdataentity.d.ts" />

// Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes

declare namespace D365 {
    export namespace Sdk {
        /**
         * An object indicating if the user can create, read or update data values for an attribute.
         */
        export interface AttributePrivilege {
            /**
             * Gets whether read of the attribute value is allowed.
             */
            canRead: boolean;

            /**       
             * Gets whether update of the attribute value is allowed.
             */
            canUpdate: boolean;

            /**   
             * Gets whether create of the attribute value is allowed.
             */
            canCreate: boolean;
        }

        export interface Attribute {
            /**
             * Returns the controls associated with the attribute.
             */
            controls: Collection<Control>;

            /**
             * Sets a function to be called when the attribute value is changed.
             * @param callback function pointer.
             */
            addOnChange(callback: (context: Sdk.ExecutionContext) => void): void;

            /**
             * Causes the OnChange event to occur on the attribute so that any script associated to that event can execute.
             */
            fireOnChange(): void;

            /**
             * Returns a string value that represents the type of attribute.
             * This method will return one of the following string values:
             * boolean, datetime, decimal, double, integer, lookup, memo, money, multioptionset, optionset, string
             */
            getAttributeType(): string;

            /**
             * Returns a string value that represents formatting options for the attribute.
             * This method will return one of the following string values or "null":
             * date, datetime, duration, email, language, none, phone, text, textarea, tickersymbol, timezone, url
             */
            getFormat(): string;

            /**
             * Returns a boolean value indicating if there are unsaved changes to the attribute value.
             */
            getIsDirty(): boolean;

            /**
             * Returns a string representing the logical name of the attribute.
             */
            getName(): string;

            /**
             * Returns the Xrm.Page.data.entity object that is the parent to all attributes.
             */
            getParent(): FormContextDataEntity;

            /**
            * Returns a string value indicating whether a value for the attribute is required or recommended.
            * Returns one of the following values:
            * none, required, recommended
            */
            getRequiredLevel(): string;

            /**
            * Returns a string indicating when data from the attribute will be submitted when the record is saved.
            * Returns one of the following values:
            * always, never, dirty
            */
            getSubmitMode(): string;

            /**
             * Returns an object with three Boolean properties corresponding to privileges
             * indicating if the user can create, read or update data values for an attribute.
             * This function is intended for use when Field Level Security modifies a user’s privileges for a particular attribute.
             */
            getUserPrivilege(): AttributePrivilege;

            /**
             * Retrieves the data value for an attribute.
             */
            getValue(): any;

            /**
            * Returns a boolean value to indicate whether the value of an attribute is valid.
            */
            isValid(): boolean;

            /**
             * Removes a function from the OnChange event hander for an attribute.
             * @param callback function reference.
             */
            removeOnChange(callback: (context: Sdk.ExecutionContext) => void): void;

            /**
             * Sets whether data is required or recommended for the attribute before the record can be saved.
             * @param requirementLevel One of the following values: 'none', 'required', 'recommended'.
             */
            setRequiredLevel(requirementLevel: string): void;

            /**
             * Sets whether data from the attribute will be submitted when the record is saved.
             * @param submitMode One of the following values: 'always' (The data is always sent with a save), 'never' (The data is never sent with a save), 'dirty' (Default behavior. The data is sent with the save when it has changed).
             */
            setSubmitMode(submitMode: string): void;

            /**
             * Sets the data value for an attribute.
             * @param value Depends on the type of attribute.
             */
            setValue(value: any): void;
        }

        export interface BooleanAttribute extends Attribute {
            /**
             * Returns a value that represents the value set for a Boolean attribute when the form opened.
             */
            getInitialValue(): boolean | null;

            /**
             * Retrieves the data value for an attribute.
             */
            getValue(): boolean | null;

            /**
             * Sets the data value for an attribute.
             * @param value Depends on the type of attribute.
             */
            setValue(value: boolean | null): void;
        }



        export interface LookupAttribute extends Attribute {
            /**
             * Returns the controls associated with the attribute.
             */
            controls: Collection<LookupControl>;

            /**
             * Returns a Boolean value indicating whether the lookup represents a partylist lookup.
             * Partylist lookups allow for multiple records to be set, such as the To: field for an email entity record.
             */
            getIsPartyList(): boolean;

            /**
             * Retrieves the data value for an attribute.
             */
            getValue(): EntityReference[] | null;

            /**
             * Sets the data value for an attribute.
             * @param value Depends on the type of attribute.
             */
            setValue(value: EntityReference[] | null): void;
        }

        export interface OptionSetAttribute extends Attribute {
            /**
             * Returns the controls associated with the attribute.
             */
            controls: Collection<OptionSetControl>;

            /**
             * Returns an option object with the value matching the argument passed to the method.
             * @param value of the option
             */
            getOption(value: string | number): D365.Sdk.OptionSetItem;

            /**
             * Returns an array of option objects representing the valid options for an optionset attribute.
             */
            getOptions(): D365.Sdk.OptionSetItem[];

            /**
             * Returns the option object that is selected in an optionset attribute.
             */
            getSelectedOption(): D365.Sdk.OptionSetItem;

            /**
             * Returns a string value of the text for the currently selected option for an optionset attribute.
             */
            getText(): string;

            /**
             * Returns a value that represents the value set for an OptionSet attribute when the form opened.
             */
            getInitialValue(): number | null;

            /**
             * Retrieves the data value of an attribute.
             */
            getValue(): number | null;

            /**
             * Sets the data value for an attribute.
             * @param value Depends on the type of attribute.
             */
            setValue(value: number | null): void;

        }

        export interface MultiSelectOptionSetAttribute extends Attribute {
            /**
             * Returns the controls associated with the attribute.
             */
            controls: Collection<OptionSetControl>;

            /**
             * Returns an option object with the value matching the argument passed to the method.
             * @param value of the option
             */
            getOption(value: string | number): D365.Sdk.OptionSetItem;

            /**
             * Returns an array of option objects representing the valid options for an optionset attribute.
             */
            getOptions(): D365.Sdk.OptionSetItem[];

            /**
             * Returns the option object that is selected in an optionset attribute.
             */
            getSelectedOption(): D365.Sdk.OptionSetItem[];

            /**
             * Returns a string value of the text for the currently selected option for an optionset attribute.
             */
            getText(): string[];

            /**
             * Returns a value that represents the value set for an OptionSet attribute when the form opened.
             */
            getInitialValue(): number[] | null;

            /**
            * Retrieves the data value for an attribute.
            */
            getValue(): number[] | null;

            /**
             * Sets the data value for an attribute.
             * @param value Depends on the type of attribute.
             */
            setValue(value: number[] | null): void;
        }

        export interface NumberAttribute extends Attribute {
            /**
             * Returns a number indicating the minimum allowed value for an attribute.
             */
            getMin(): number;

            /**
             * Returns a number indicating the maximum allowed value for an attribute.
             */
            getMax(): number;

            /**
             * Retrieves the data value for an attribute.
             */
            getValue(): number | null;

            /**
            * Sets the data value for an attribute.
            * @param value Depends on the type of attribute.
            */
            setValue(value: number | null): void;

            /**
            * Returns the number of digits allowed to the right of the decimal point.
            */
            getPrecision(): number;

            /**
            * Sets the number of digits allowed to the right of the decimal point.
            */
            setPrecision(value: number): void;
        }

        export interface StringAttribute extends Attribute {
            /**
             * Returns a number indicating the maximum length of a string or memo attribute.
             */
            getMaxLength(): number;

            /**
            * Retrieves the data value for an attribute.
            */
            getValue(): string | null;

            /**
             * Sets the data value for an attribute.
             * @param value Depends on the type of attribute.
             */
            setValue(value: string | null): void;
        }

        export interface DateTimeAttribute extends Attribute {
            /**
             * Retrieves the data value for an attribute.
             */
            getValue(): Date | null;

            /**
             * Sets the data value for an attribute.
             * @param value Depends on the type of attribute.
             */
            setValue(value: Date | null): void;

        }

    }
}