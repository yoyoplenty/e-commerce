import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@material-ui/core";

import useStyles from "./styles";
import { useContext } from "react";
import { CartContext } from "../../context/cart";

const logo = require("../../assets/commerce-logo.webp");

const Navbar = () => {
  const styles = useStyles();
  const location = useLocation();

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

          <div className="px-1">
            {location.pathname !== "/cart" && (
              <Link to={"/cart"} className="nav-link">
                <IconButton aria-label="show cart items" color="inherit">
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
