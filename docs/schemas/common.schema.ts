export const commonSchemas = {
  ErrorResponse: {
    type: "object",
    required: ["message"],
    properties: {
      message: {
        type: "string",
        example: "Something went wrong",
      },
      error: {
        type: "string",
        example: "INTERNAL_ERROR",
      },
    },
  },

};
