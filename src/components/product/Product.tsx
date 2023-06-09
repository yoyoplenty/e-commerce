import { useContext } from "react";
import { AddShoppingCart } from "@material-ui/icons";
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@material-ui/core";

import useStyles from "./styles";
import { commerce } from "../../lib/commerce";

import { CartContext } from "../../context/cart";

const Product = ({ product }: any) => {
  const styles = useStyles();
  const { id, name, image, price, description } = product;

  const { setCart }: any = useContext(CartContext);

  const handleAddToCart = async (productId: any, quantity: any) => {
    const item: any = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  return (
    <Card className={styles.root}>
      <CardMedia className={styles.media} image={image.url} title={name} />
      <CardContent>
        <div className={styles.cardContent}>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography>{price.formatted_with_symbol}</Typography>
        </div>

        <Typography dangerouslySetInnerHTML={{ __html: description }} variant="body2" color="textSecondary" />
      </CardContent>

      <CardActions disableSpacing className={styles.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={() => handleAddToCart(id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
