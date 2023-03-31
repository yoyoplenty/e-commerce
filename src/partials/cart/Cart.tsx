import { Button, Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { CartItem } from "../../components";

const Cart = ({ cartData }: any) => {
  const styles = useStyles();

  const EmptyCart = () => {
    return <Typography variant="subtitle1">You have no items in your shopping cart, start by adding some!</Typography>;
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cartData.line_items.map((item: any) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem itemData={item} />
            </Grid>
          ))}
        </Grid>

        <div className={styles.cardDetails}>
          <Typography variant="h5">Subtotal : {cartData.subtotal.formatted_with_symbol}</Typography>

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

  return (
    <>
      {!cartData.line_items ? (
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
              {!cartData.line_items.length ? <EmptyCart /> : <FilledCart />}
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Cart;
