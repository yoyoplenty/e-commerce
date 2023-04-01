import { useContext } from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";

import useStyles from "./styles";
import { commerce } from "../../lib/commerce";
import { CartContext } from "../../context/cart";

const CartItem = ({ itemData }: any) => {
  const styles = useStyles();

  const { setCart }: any = useContext<any>(CartContext);

  const handleUpdateCartQty = async (lineItemId: any, quantity: any) => {
    const response = await commerce.cart.update(lineItemId, { quantity });
    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId: any) => {
    const response = await commerce.cart.remove(lineItemId);
    setCart(response.cart);
  };

  return (
    <Card>
      <CardMedia image={itemData.image.url} className={styles.image} />
      <CardContent className={styles.cardContent}>
        <Typography variant="h5">{itemData.name} </Typography>
      </CardContent>

      <CardActions className={styles.cartActions}>
        <div className={styles.buttons}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(itemData.id, itemData.quantity - 1)}>
            -
          </Button>
          <Typography>&nbsp;{itemData.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(itemData.id, itemData.quantity + 1)}>
            +
          </Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(itemData.id)}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
