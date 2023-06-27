import Joi from "joi";

const MIN = 3;
const MAX = 12;
const usernameSchema = Joi.string()
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
const nameSchema = Joi.string()
  .required()
  .min(MIN)
  .max(50)
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
          error.message = `name cannot be more than ${50} characters.`;
          break;
      }
    });
    return errors;
  });
const genderSchema = Joi.string()
  .required()
  .error((errors) => {
    errors.forEach((error) => {
      switch (error.code) {
        case "string.empty":
          error.message = "gender is required";
          break;
      }
    });
    return errors;
  });
const dateOfBirthSchema = Joi.required()
  .error((errors) => {
    errors.forEach((error) => {
      switch (error.code) {
        case "string.empty":
          error.message = "dateOfBirth is required";
          break;
      }
    });
    return errors;
  });
const phoneNumberSchema = Joi.string()
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
const passwordSchema = Joi.string()
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
const emailSchema = Joi.string()
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

export const signupSchema = Joi.object({
  name: nameSchema,
  gender: genderSchema,
  dateOfBirth: dateOfBirthSchema,
  email: emailSchema,
  phoneNumber: phoneNumberSchema,
  username: usernameSchema,
  password: passwordSchema,
});

export const signinSchema = Joi.object({
  username: usernameSchema,
  password: passwordSchema,
});
