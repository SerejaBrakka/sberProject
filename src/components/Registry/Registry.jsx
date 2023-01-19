import { Formik } from "formik";
import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { loginValidator } from "../../validation";
const Login = () => {
  const navigate = useNavigate();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (data) => {
      fetch("https://api.react-learning.ru/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((resp) => console.log(resp));
    },
  });
  const submitHandler = async (values) => {
    const response = await mutateAsync(values);
    console.log(response);
    navigate("/signin");
  };

  return (
    <>
      <h1>Регистрация</h1>
      <Formik
        initialValues={{ group: "", password: "", email: "" }}
        validationSchema={loginValidator}
        onSubmit={submitHandler}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit} className="wrapper">
            <label htmlFor="group">Group</label>
            <input
              id="group"
              type="text"
              {...formik.getFieldProps("group")}
              placeholder="sm9"
            />
            {formik.touched.group && formik.errors.group ? (
              <div>{formik.errors.group}</div>
            ) : null}

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="text"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <button disabled={isLoading} type="submit">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Login;
