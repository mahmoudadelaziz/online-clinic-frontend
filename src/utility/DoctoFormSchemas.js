import Joi from "joi";
import { specializations } from "../constants";

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
          error.message = "Username is required";
          break;
        case "string.min":
          error.message = `Username cannot be less than ${MIN} characters.`;
          break;
        case "string.max":
          error.message = `Username cannot be more than ${MAX} characters.`;
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
          error.message = "Name is required";
          break;
        case "string.min":
          error.message = `Name cannot be less than ${MIN} characters.`;
          break;
        case "string.max":
          error.message = `Name cannot be more than ${50} characters.`;
          break;
      }
    });
    return errors;
  });
const specializationSchema = Joi.string()
  .required()
  .error((errors) => {
    errors.forEach((error) => {
      switch (error.code) {
        case "string.empty":
          error.message = "Specialization is required";
          break;
      }
    });
    return errors;
  });
const subSpecializationSchema = Joi.string().error((errors) => {
  errors.forEach((error) => {
    error.message = "Invalid input";
  });
  return errors;
});
const aboutSchema = Joi.string().error((errors) => {
  errors.forEach((error) => {
    error.message = "Invalid input";
  });
  return errors;
});
const visitFeeSchema = Joi.number().error((errors) => {
  errors.forEach((error) => {
    error.message = "Invalid input";
  });
  return errors;
});
const workingHoursStartSchema = Joi.required().error((errors) => {
  errors.forEach((error) => {
    error.message = "Invalid input";
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
const workingHoursEndSchema = Joi.required().error((errors) => {
  errors.forEach((error) => {
    error.message = "Invalid input";
  });
  return errors;
});
const locationIDSchema = Joi.number().error((errors) => {
  errors.forEach((error) => {
    error.message = "Invalid input";
  });
  return errors;
});
const phoneNumberSchema = Joi.string()
  .regex(/^(\+\d{1,3}[- ]?)?\d{10}$/)
  .error((errors) => {
    errors.forEach((error) => {
      switch (error.code) {
        case "string.empty":
          error.message = "Mobile number is required";
        case "string.pattern.base":
          error.message = "Please enter a valid mobile number";
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
          error.message = "Password is required";
          break;
        case "string.min":
          error.message = `Password cannot be less than ${MIN} characters.`;
          break;
        case "string.max":
          error.message = `Password cannot be more than ${MAX} characters.`;
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
          error.message = "Email is required";
        case "string.email":
          error.message = "This email is not valid";
          break;
        case "string.required":
          error.message = "Email cannot be empty";
          break;
      }
    });
    return errors;
  });

export const doctorSignupSchema = Joi.object({
  name: nameSchema,
  email: emailSchema,
  gender: genderSchema,
  workingHoursStart: workingHoursStartSchema,
  workingHoursEnd: workingHoursEndSchema,
  phoneNumber: phoneNumberSchema,
  specialization: specializationSchema,
  subSpecialization: subSpecializationSchema,
  about: aboutSchema,
  locationId: locationIDSchema,
  visitFee: visitFeeSchema,
  username: usernameSchema,
  password: passwordSchema,
});

export const doctorSigninSchema = Joi.object({
  username: usernameSchema,
  password: passwordSchema,
});
