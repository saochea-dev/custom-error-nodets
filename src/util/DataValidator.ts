import { BaseError } from "../exception/BaseError";
import { ErrorCode } from "../constant/ErrorCode";
export class DataValidator {

    /**
     * Validates that the specified fields are present in the provided data.
     * @param data The data object or array of objects to validate.
     * @param fields The fields to check for presence.
     */
    static validate(data: object | object[], ...fields: string[]): void {
        fields.forEach((field) => {
            if (this.getValueByKey(field, data) === "") {
                throw new BaseError(ErrorCode.MISSING_REQUIRED_DATA_ERROR.Code, `Error Not Found >>>>>> ${field}`);
            }
        });
    }

    /**
     * Retrieves the value associated with the specified key from an object or array of objects.
     * @param key The key to look for.
     * @param data The data object or array of objects to search in.
     * @returns The value associated with the key, or an empty string if not found.
     */
    private static getValueByKey(key: string, data: object | object[]): string {
        if (Array.isArray(data)) {
            for (const item of data) {
                const value = this.getValueFromObject(key, item);
                if (value !== "") {
                    return value;
                }
            }
        } else {
            return this.getValueFromObject(key, data);
        }
        return "";
    }

    /**
     * Retrieves the value associated with the specified key from a single object.
     * @param key The key to look for.
     * @param obj The object to search in.
     * @returns The value associated with the key, or an empty string if not found.
     */
    private static getValueFromObject(key: string, obj: object): string {
        return obj.hasOwnProperty(key) ? key : "";
    }
}
