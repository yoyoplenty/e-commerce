import { ShoppingCart } from "@material-ui/icons";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@material-ui/core";

import useStyles from "./styles";
const logo = require("../../assets/commerce-logo.webp");

const Navbar = ({ totalItems }: any) => {
  const styles = useStyles();

  return (
    <>
      <AppBar position="fixed" className={styles.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={styles.title} color="inherit">
            <img src={logo} alt="commerce-logo" height={"25px"} className={`${styles.image} rounded-circle`} />
            Commerce.js
          </Typography>
          <div className={styles.grow} />
          <div className="">
            <IconButton aria-label="show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
