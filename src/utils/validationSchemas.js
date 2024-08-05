import * as yup from "yup";

export const USER_VALIDATION_SCHEMAS = yup.object({
  userName: yup
    .string()
    .min(2)
    .max(20)
    .trim()
    .matches(/^[A-Z]/)
    .required(),
  phoneNumber: yup
    .string()
    .trim()
    .length(13)
    .matches(/^\+380\d{9}$/, "Номер телефона повинен мати формат +380XXXXXXXXX")
    .required(),
  userEmail: yup
    .string()
    .email()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
});
