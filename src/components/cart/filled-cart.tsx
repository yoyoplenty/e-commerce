import { useContext } from "react";
import { Button, Grid, Typography } from "@material-ui/core";

import CartItem from "./cart-item";
import { CartStyle } from "../../partials";

import { commerce } from "../../lib/commerce";
import { CartContext } from "../../context/cart";

const FilledCart = ({ cart }: any) => {
  const styles = CartStyle();

  const { setCart }: any = useContext<any>(CartContext);

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };

  return (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item: any) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem itemData={item} />
          </Grid>
        ))}
      </Grid>

      <div className={styles.cardDetails}>
        <Typography variant="h5">Subtotal : {cart.subtotal.formatted_with_symbol}</Typography>

        <div>
          <Button className={styles.emptyButton} size="large" type="button" variant="contained" color="secondary">
            Empty cart
          </Button>

          <Button className={styles.emptyButton} size="large" type="button" variant="contained" color="primary" onClick={handleEmptyCart}>
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilledCart;
