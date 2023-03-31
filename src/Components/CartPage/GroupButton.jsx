import React, { useState } from "react";
import { ButtonGroup, Button, makeStyles } from "@material-ui/core";

import toastMessage from "../../utils/toastMessage";


const useStyle = makeStyles({
  component: {
    marginTop: 30,
  },
  button: {
    borderRadius: "50%",
  },
});

const GroupedButton = ({ product }) => {
  const classes = useStyle();
  const [counter, setCounter] = useState(1);


  const handleIncrement = () => {
    if (counter + 1 <= 5) {
      setCounter((counter) => counter + 1);
 
       toastMessage(`You've changed Iphone 13pro max QUANTITY to ${counter + 1}`,"success");
    } else {
       toastMessage("We're sorry! Only 5 unit(s) allowed in each order", "error");
    }
  };
  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
     toastMessage(`You've changed Iphone 13pro max QUANTITY to ${counter -1}`,"success");
  };

  return (
    <>
      <ButtonGroup className={classes.component}>
        <Button
          className={classes.button}
          onClick={() => handleDecrement()}
          disabled={counter == 1}
        >
          -
        </Button>
        <Button disabled>{counter}</Button>
        <Button className={classes.button} onClick={() => handleIncrement()}>
          +
        </Button>
      </ButtonGroup>
    </>
  );
};

export default GroupedButton;