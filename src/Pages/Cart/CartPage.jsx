import React, { useEffect, useState } from "react";
import { Box, makeStyles, Typography, Button, Grid } from "@material-ui/core";
import CartItem from "../../Components/CartPage/CartItem";
import TotalView from "../../Components/CartPage/TotalView";
import LoaderSpinner from "../../Components/CartPage/LoaderSpinner";
import ToastMessageContainer from "../../Components/CartPage/ToastMessageContainer";

const useStyle = makeStyles((theme) => ({
  component: {
    marginTop: 55,
    padding: "30px 6%",
    display: "flex",
  },
  leftComponent: {
    paddingRight: 15,
    [theme.breakpoints.between(0,960)]: {
      paddingRight:0,
      marginBottom:20,
    },
  },
  header: {
    padding: "15px 24px",
    background: "#fff",
  },
  bottom: {
    padding: "16px 22px",
    background: "#fff",
    boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
    borderTop: "1px solid #f0f0f0",
  },
  placeOrder: {
    display: "flex",
    marginLeft: "auto",
    background: "#fb641b",
    color: "#fff",
    borderRadius: 2,
    width: 250,
    height: 51,
  },
}));

export const CartPage = () => {
  const classes = useStyle();
  const cartProducts = JSON.parse(localStorage.getItem("items1")) || [];
  const [totalPrice, setTotalPrice] = useState(0);
  console.log("----------------", cartProducts);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let total = 0;

    cartProducts.forEach(el => {
      // console.log(total, totalPrice);
      total += el.price
    })

    setTotalPrice(total);
  }, []);
  console.log("totalPrice", totalPrice);

  const placeOrder = () => {
    window.location.replace("/checkout?init=true");
  };

  return isLoading ? (
    <LoaderSpinner />
  ) : (
    <>
      
        <Grid container className={classes.component}>
          <Grid
            item
            lg={9}
            md={9}
            sm={12}
            xs={12}
            className={classes.leftComponent}
          >
            <Box className={classes.header}>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart 
              </Typography>
            </Box>
            {cartProducts.map(el => 
              <CartItem key={el.id} {...el} />)}
            <Box className={classes.bottom}>
              <Button
                onClick={placeOrder}
                variant="contained"
                className={classes.placeOrder}
                style={{ backgroundColor: "#fb641b" }}
              >
                Checkout
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            {/* {} */}
            <TotalView totalPrice={totalPrice} />
          </Grid>
        </Grid>
      
        <>
        </>
      
      <ToastMessageContainer />
    </>
  );
};

