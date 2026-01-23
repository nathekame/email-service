import { emailSchemas } from "./email.schema";
import { commonSchemas } from "./common.schema";

export const schemas = {
  ...emailSchemas,
  ...commonSchemas,
};
