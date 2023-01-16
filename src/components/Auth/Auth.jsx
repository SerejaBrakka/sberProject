import { Formik } from "formik";
import React from "react";
import { authValidator } from "../../validation";
import classes from "./Auth.module.css";

const Auth = () => {
  const submitHandler = (values) => console.log(values);
  return (
    <>
      <h1>Авторизация</h1>
      <Formik
        initialValues={{ password: "", email: "" }}
        validationSchema={authValidator}
        onSubmit={submitHandler}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit} className={classes.form}>
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

export default Auth;
