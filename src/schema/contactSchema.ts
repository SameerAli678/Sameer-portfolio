// src/schemas/contactSchema.ts

// yup Import
import * as yup from "yup";

export const ContactSchema = yup.object().shape({
  firstName: yup.string().required("firstName is required"),
  lastName: yup.number().required("lastName is required"),
  email: yup.string().email().required("Email is required"),
  message: yup.string().email().required("message is required"),
});
