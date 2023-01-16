import * as Yup from "yup";
export const loginValidator = Yup.object({
  group: Yup.string()
    .min(3, "Must be 3 characters or more")
    .max(5, "Must be 5 characters or less")
    .required("Required"),
  password: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});
export const authValidator = Yup.object({
  password: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});
