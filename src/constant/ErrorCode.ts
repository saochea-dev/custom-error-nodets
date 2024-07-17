
export const ErrorCode = {
    UNCAUGHT_ERROR: { Code: "000000",Description: "Uncaught Error" },
    MISSING_REQUIRED_FIELD_ERROR: { Code: "000001", Description: "Missing Required Field Error" },
    INVALID_DATA_ERROR: { Code: "000002", Description: "Invalid Data Error" },
    NOT_FOUND_ERROR:{Code:"000004",Description:"Not Found Data Error"},
    LIST_ERROR:{Code:"000005",Description:"List Data Error"},
    UPDATE_NOT_AFFECT_ERROR:{Code:"000006",Description:"Update Data Error"},
    DELETE_DATA_ERROR:{Code:"000007",Description:"Delete Data Error"},
    MISSING_REQUIRED_DATA_ERROR:{Code:"000008",Description:"Missing Required Data Error"}
} as const;
export type ErrorCode = keyof typeof ErrorCode;
