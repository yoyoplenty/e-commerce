import { Button, Grid, Typography } from "@material-ui/core";
import CartItem from "./cart-item";
import { CartStyle } from "../../partials";

const FilledCart = ({ cart }: any) => {
  const styles = CartStyle();

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

          <Button className={styles.emptyButton} size="large" type="button" variant="contained" color="primary">
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilledCart;
