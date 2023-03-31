import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import useStyles from "./styles";

const CartItem = ({ itemData }: any) => {
  const styles = useStyles();

  return (
    <Card>
      <CardMedia image={itemData.image.url} className={styles.image} />
      <CardContent className={styles.cardContent}>
        <Typography variant="h5">{itemData.name} </Typography>
      </CardContent>

      <CardActions className={styles.cartActions}>
        <div className={styles.buttons}>
          <Button type="button" size="small">
            -
          </Button>
          <Typography>&nbsp;{itemData.quantity}&nbsp;</Typography>
          <Button type="button" size="small">
            +
          </Button>
        </div>
        <Button variant="contained" type="button" color="secondary">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
