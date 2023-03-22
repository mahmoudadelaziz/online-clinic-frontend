import Joi from "joi";

const MIN = 3;
const MAX = 12;
export const usernameSchema = Joi.string()
  .required()
  .min(MIN)
  .max(MAX)
  .error((errors) => {
    errors.forEach((error) => {
      switch (error.code) {
        case "string.empty":
          error.message = "username is required";
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
export const nameSchema = Joi.string()
  .required()
  .min(MIN)
  .max(MAX)
  .error((errors) => {
    errors.forEach((error) => {
      switch (error.code) {
        case "string.empty":
          error.message = "name is required";
          break;
        case "string.min":
          error.message = `name cannot be less than ${MIN} characters.`;
          break;
        case "string.max":
          error.message = `name cannot be more than ${MAX} characters.`;
          break;
      }
    });
    return errors;
  });
export const phoneNumberSchema = Joi.string()
  .regex(/^(\+\d{1,3}[- ]?)?\d{10}$/)
  .error((errors) => {
    errors.forEach((error) => {
      switch (error.code) {
        case "string.empty":
          error.message = "mobile number is required";
        case "string.pattern.base":
          error.message = "please enter a valid mobile number";
          break;
      }
    });
    return errors;
  });
export const passwordSchema = Joi.string()
  .required()
  .min(MIN)
  .max(MAX)
  .error((errors) => {
    errors.forEach((error) => {
      switch (error.code) {
        case "string.empty":
          error.message = "password is required";
          break;
        case "string.min":
          error.message = `password cannot be less than ${MIN} characters.`;
          break;
        case "string.max":
          error.message = `password cannot be more than ${MAX} characters.`;
          break;
      }
    });
    return errors;
  });
export const emailSchema = Joi.string()
  .required()
  .email({ tlds: { allow: false } })
  .error((errors) => {
    errors.forEach((error) => {
      switch (error.code) {
        case "string.empty":
          error.message = "email is required";
        case "string.email":
          error.message = "email is not valid";
          break;
        case "string.required":
          error.message = "email cannot be empty";
          break;
      }
    });
    return errors;
  });
