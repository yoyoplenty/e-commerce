import { ShoppingCart } from "@material-ui/icons";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@material-ui/core";

import useStyles from "./styles";
import { useContext } from "react";
import { CartContext } from "../../context/cart";
import { Link } from "react-router-dom";

const logo = require("../../assets/commerce-logo.webp");

const Navbar = () => {
  const styles = useStyles();
  const { cart }: any = useContext(CartContext);

  const totalItems = cart.total_items;

  return (
    <>
      <AppBar position="fixed" className={styles.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={styles.title} color="inherit">
            <Link to={"/"} className="nav-link">
              <img src={logo} alt="commerce-logo" height={"25px"} className={`${styles.image} rounded-circle`} />
              Commerce.js
            </Link>
          </Typography>

          <div className={styles.grow} />

          <div className="">
            <Link to={"/cart"} className="nav-link">
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
