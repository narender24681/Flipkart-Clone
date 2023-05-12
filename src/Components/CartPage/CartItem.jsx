import { Card, makeStyles, Box, Typography, Button } from "@material-ui/core";
import clsx from "clsx";

import GroupButton from "./GroupButton";
import AlertDialogBox from "./AlertDialgBox";
import { useState } from "react";

const useStyle = makeStyles({
  component: {
    borderTop: "1px solid #f0f0f0",
    borderRadius: 0,
    display: "flex",
    "&:hover": {
      cursor: "pointer",
      "& $itemTitle": {
        color: "#2874f0",
      },
    },
  },
  leftComponent: {
    margin: 20,
    display: "flex",
    flexDirection: "column",
  },
  itemTitle: {
    color: "#000",
  },
  image: {
    height: 110,
    width: 110,
    objectFit: "contain",
  },
  mid: {
    margin: 20,
  },
  greyTextColor: {
    color: "#878787",
  },
  smallText: {
    fontSize: 14,
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
  },
  remove: {
    marginTop: 12,
    fontSize: 16,
  },
});

const CartItem = ({ item, image1, title, brand, price }) => {
  const classes = useStyle();
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const dialogClose = () => {
    setIsOpenDialog(false);
  };

  const dialogOpen = () => {
    setIsOpenDialog(true);
  };

  return (
    <>
      <Card className={classes.component}>
        <Box className={classes.leftComponent}>
          <img src={image1} className={classes.image} />
          <GroupButton product={item} />
        </Box>
        <Box className={classes.mid}>
            <Typography className={classes.itemTitle}>
            {title}
            </Typography>

            <Typography
              className={clsx(classes.greyTextColor, classes.smallText)}
              style={{ marginTop: 10 }}
            >
              Seller:{brand}
              <span>
                <img src={"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"} style={{ height: 18, marginLeft: 10 }} />
              </span>
            </Typography>
            <Typography style={{ margin: "20px 0", color: "#000" }}>
              <span className={classes.price}>₹ {price}</span>
            </Typography>
          {/* </Link> */}
          <Button className={classes.remove} onClick={dialogOpen}>
            Remove
          </Button>
        </Box>
      </Card>
      <AlertDialogBox
        isOpenDialog={isOpenDialog}
        handleClose={dialogClose}
        
        type="cart"
      />
    </>
  );
};

export default CartItem;