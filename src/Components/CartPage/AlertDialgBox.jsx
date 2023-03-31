import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(() => ({
  cancelBtn: {
    fontWeight: 500,
    padding: "7px 5px",
    minWidth: 100,
    borderRadius: "2px",
    boxShadow: "none",
    backgroundColor:"white",
    border: "1px solid #c2c2c2",
    textTransform: "uppercase",
    textAlign: "center",
    "&:hover": {
      cursor: "pointer",
      color: "#2874f0",
    },
  },
}));

function AlertDialogBox({ itemId, isOpenDialog = false, handleClose, type }) {

  const classes = useStyles();


  return (
    <div>
      <Dialog
        open={isOpenDialog}
        maxWidth={"md"}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Remove Item"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{ marginLeft: "8%" }}
            id="alert-dialog-slide-description"
          >
            Are you sure you want to remove this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "15px 0",
          }}
        >
          <button
            onClick={handleClose}
            className={classes.cancelBtn}
          >
            Cancel
          </button>
          <Button
            
            style={{ background: "#2874f0" }}
            variant="contained"
            color="Primary"
          >
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AlertDialogBox;