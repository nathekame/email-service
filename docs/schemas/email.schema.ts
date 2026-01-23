export const emailSchemas = {
  SendEmailRequest: {
    type: "object",
    required: ["to", "subject", "htmlContent", "sender"],
    properties: {
      sender: { type: "object", example: { name: "Sam Jones", email: "sam.jones@example.com" } },
      to: { type: "object", example: { name: "John Doe", email: "john.doe@example.com" } },
      subject: { type: "string" },
      htmlContent: { type: "string" },
    },
  },

  SendEmailResponse: {
    type: "object",
    properties: {
      message: { type: "string", example: "Email sent successfully" }
    },
  },
};
