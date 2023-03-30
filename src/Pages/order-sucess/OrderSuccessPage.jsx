import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import successImg from '../../assets/success.png';

export const  OrderSuccessPage=()=> {

  return (
      <div
        style={{
          textAlign: "center",
          fontSize: "14px",
          padding: "20px",
          marginTop: "70px",
        }}
      >
        <div>
          <img
            style={{ width: "400px", maxWidth: "100%", margin:"auto"}}
            src={successImg}
            alt="Order Success"
          />
          <div
            style={{
              fontSize: "2em",
              marginTop: "-30px",
              marginBottom: "30px",
              fontWeight: 500,
            }}
          >
            Order Completed !
          </div>
          <Button
            style={{ backgroundColor: "#2874f0" }}
            variant="contained"
            color="primary"
          >
            <Link to="/">Continue To Shopping</Link>
          </Button>
        </div>
      </div>
  );
}

