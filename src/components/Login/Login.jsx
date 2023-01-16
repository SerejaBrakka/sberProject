import { Formik } from "formik";
import React from "react";
import { loginValidator } from "../../validation";
import classes from "./Login.module.css";

const Login = () => {
  const submitHandler = (values) => console.log(values);
  return (
    <>
      <h1>Регистрация</h1>
      <Formik
        initialValues={{ group: "", password: "", email: "" }}
        validationSchema={loginValidator}
        onSubmit={submitHandler}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit} className={classes.form}>
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

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Login;
