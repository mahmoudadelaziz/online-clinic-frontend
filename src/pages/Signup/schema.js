import Joi from "joi";

const MIN = 3;
const MAX = 12;
export const usernameSchema = Joi.string()
  .not()
  .empty()
  .min(MIN)
  .max(MAX)
  .error((errors) => {
    errors.forEach((error) => {
      switch (error.code) {
        case "string.empty":
          error.message = "username cannot be empty";
          break;
        case "string.min":
          error.message = `username cannot be less than ${MIN} characters.`;
          break;
        case "string.max":
          error.message = `username cannot be more than ${MAX} characters.`;
          break;
      }
    });
    return errors;
  });
