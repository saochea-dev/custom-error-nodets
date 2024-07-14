
export const HttpStatusCode = {
    NOT_FOUND: { StatusCode: 404, Description: "The server cannot find the requested resource." },
    INTERNAL_SERVER_ERROR: { StatusCode: 500, Description: "Internal Server Error." },
    UPDATE_NOT_AFFECT_ERROR:{StatusCode:304,Description:"Update Data Failed"}
} as const;

export type HttpStatusCode = keyof typeof HttpStatusCode;