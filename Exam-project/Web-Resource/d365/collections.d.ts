// Reference: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections

declare namespace D365 {
    export namespace Sdk {
        export interface Collection<T> {
            /**
             * Applies the action contained in a delegate function.
             * @param delegate Delegate function with parameters for attribute and index.
             */
            forEach(delegate: (item: T, index: number) => void): void;

            /**
             * Get one or more objects from the collection depending on the arguments passed.
             */
            get(): T[];

            /**
             * Get one or more objects from the collection depending on the arguments passed.
             *  @param name The object where the name matches the argument.
             */
            get(name: string): T;

            /**
             * Get one or more objects from the collection depending on the arguments passed.
             *  @param index The object where the index matches the number.
             */
            get(index: number): T;

            /**
             * Get one or more objects from the collection depending on the arguments passed.
             *  @param predicate Any objects that cause the delegate function to return true.
             */
            get(predicate: (item: T, index: number) => boolean): T[];

            /**
             * Get the number of items in the collection.
             */
            getLength(): number;
        }

    }
}