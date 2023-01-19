import { Formik } from "formik";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { authValidator } from "../../validation";
const Auth = () => {
  const [user, setUser] = useState(
    localStorage.getItem("userPetShopEmail") || ""
  );
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (data) => {
      fetch("https://api.react-learning.ru/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((resp) => {
          setUser(resp.data.email);
          localStorage.setItem("userPetShopEmail", resp.data.email);
          localStorage.setItem("userPetShopToken", resp.token);
        });
    },
  });
  const submitHandler = async (values) => {
    mutateAsync(values);
  };
  function logout() {
    localStorage.removeItem("userPetShopEmail");
    localStorage.removeItem("userPetShopToken");
    setUser("");
  }
  return (
    <>
      {user ? (
        <div className="wrapper">
          <h1>{user}</h1>
          <button onClick={logout}>Выйти</button>
        </div>
      ) : (
        <>
          <h1>Авторизация</h1>
          <Formik
            initialValues={{ password: "", email: "" }}
            validationSchema={authValidator}
            onSubmit={submitHandler}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit} className="wrapper">
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
                <input
                  id="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
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
      )}
    </>
  );
};

export default Auth;
