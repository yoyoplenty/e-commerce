import { useContext } from "react";
import { Container, Typography } from "@material-ui/core";

import useStyles from "./styles";

import { CartContext } from "../../context/cart";
import { EmptyCart, FilledCart } from "../../components";

const Cart = () => {
  const styles = useStyles();
  const { cart }: any = useContext(CartContext);

  return (
    <>
      {!cart.line_items ? (
        <div>
          <h3>Loading....</h3>
        </div>
      ) : (
        <div>
          <Container>
            <div className={`${styles.toolbar} py-3 my-3`}>
              <Typography className={styles.title} variant="h4">
                Your Shopping Cart
              </Typography>
              {!cart.line_items.length ? <EmptyCart /> : <FilledCart cart={cart} />}
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Cart;
