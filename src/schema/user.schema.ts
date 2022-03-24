import {object, string, ref} from 'yup';

export const createUserSchema = object({
  body: object({
    name: string().required("Name is required"),
    password: string()
      .required("Password is required")
      .min(6, "Password must be at least 8 characters long")
      .matches(/[a-zA-Z0-9_.-]*$/, "Password must contain at least one lowercase letter"),
      passwordConfirmmation: string().oneOf(
        [ref('password'), null],
        'Passwords must match'
      ),
    email: string()
      .email("Must be a valid email")
      .required("Email is required"),
  }),
})