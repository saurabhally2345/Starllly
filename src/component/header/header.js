import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Logo from "../../assests/logo.jpg";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import "./header.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "40ch",
    },
  },
  drawer: {
    width: "40%",
  },
  marginBottom: {
    marginBottom: "15px",
  },
  formControl: {
    width: "35ch",
  },
  input: {
    width: "35ch",
  },
  button: {
    width: "39ch",
  },
}));

const Header = ({
  collection,
  currentScrip,
  selectedItem,
  handleChangeScrip,
  updateCollection,
}) => {
  const classes = useStyles();

  const [state, setState] = useState({
    right: false,
  });
  const [price, setPrice] = useState(selectedItem.price);
  const [quantity, setQuantity] = useState(selectedItem.quantity);
  const [investedAmount, setInvestedAmount] = useState(
    selectedItem.invested_amount
  );

  useEffect(() => {
    setPrice(selectedItem.price);
    setQuantity(selectedItem.quantity);
    setInvestedAmount(selectedItem.invested_amount);
  }, [selectedItem]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newData = {
      scrip: currentScrip,
      price: price,
      quantity: quantity,
      invested_amount: investedAmount,
    };

    updateCollection(newData);
  };

  return (
    <div className="header">
      <img src={Logo} alt="Logo" height="24" />
      <div className="nav-icon" onClick={toggleDrawer("right", true)}>
        <FaBars />
      </div>
      <Drawer
        className={classes.drawer}
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <Grid container direction="column" justify="center">
          <form
            onSubmit={handleSubmit}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <Grid item xs container className={classes.marginBottom}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Select...</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={currentScrip}
                  onChange={handleChangeScrip}
                >
                  {collection.map((item, index) => (
                    <MenuItem value={item.scrip}>{item.scrip}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs container className={classes.marginBottom}>
              <TextField
                id="outlined-basic-1"
                className={classes.input}
                value={price || ""}
                onChange={(e) => setPrice(e.target.value)}
                label="Price"
                variant="outlined"
              />
            </Grid>
            <Grid item xs container className={classes.marginBottom}>
              <TextField
                id="outlined-basic-2"
                className={classes.input}
                value={quantity || ""}
                label="Quantity"
                variant="outlined"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Grid>
            <Grid item xs container className={classes.marginBottom}>
              <TextField
                id="outlined-basic-3"
                className={classes.input}
                onChange={(e) => setInvestedAmount(e.target.value)}
                value={investedAmount || ""}
                label="Invested Amount"
                variant="outlined"
              />
            </Grid>
            <Grid item xs container className={classes.marginBottom}>
              <Button
                type="submit"
                variant="outlined"
                className={classes.button}
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Grid>
      </Drawer>
    </div>
  );
};

export default Header;
