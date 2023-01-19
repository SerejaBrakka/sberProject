import React from "react";
import { useQuery } from "react-query";
import Loader from "../loader/Loader";
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Products.module.css";
const Products = () => {
  const [user] = useState(localStorage.getItem("userPetShopToken") || "");
  const { data, isLoading, error } = useQuery({
    queryKey: "product",
    enabled: !!user,
    queryFn: () =>
      fetch("https://api.react-learning.ru/products", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("userPetShopToken")}`,
          "Content-Type": "application/json",
        },
      }).then((res) => res.json()),
  });
  if (isLoading) return <Loader />;
  if (error) return <h1>Error</h1>;
  return (
    <>
      <div className="wrapper" style={{ marginLeft: "40px" }}>
        <h1>Products</h1>
        {user ? (
          <div className={classes.container}>
            {data.products.map((element) => (
              <div className={classes.card}>
                <h1>{element.name}</h1>
                <img
                  src={element.pictures}
                  alt={element.name}
                  className={classes.cardPicture}
                />
                <p>Вес :{element.weight} грамм</p>
                <p>
                  Цена:<b>{element.price} Руб</b>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h1>Нужно авторизоваться</h1>
            <Link to="/signin">Авторизация</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
