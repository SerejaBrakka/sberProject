import * as Yup from "yup";
export const loginValidator = Yup.object({
  group: Yup.string()
    .min(3, "Должно быть 3 символа или больше")
    .max(5, "Должно быть 5 символов или меньше")
    .required("Обязательно для заполнения"),
  password: Yup.string()
    .max(20, "Должно быть 20 символов или меньше")
    .required("Обязательно для заполнения"),
  email: Yup.string()
    .email("Неверный Email")
    .required("Обязательно для заполнения"),
});
export const authValidator = Yup.object({
  password: Yup.string()
    .max(20, "Должно быть 20 символов или меньше")
    .required("Обязательно для заполнения"),
  email: Yup.string()
    .email("Неверный Email")
    .required("Обязательно для заполнения"),
});
