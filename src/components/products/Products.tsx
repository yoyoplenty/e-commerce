import { Grid } from "@material-ui/core";
import { iProduct } from "../../data/product";
import Product from "./Product";

import useStyles from "./products-style";

const Products = ({ products, onAddToCart }: any) => {
  const styles = useStyles();

  return (
    <main className={`${styles.content} mt-5`}>
      <div className={`${styles.toolbar} pt-2`}>
        <Grid container justify-content="center" spacing={4}>
          {products.map((product: iProduct) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  );
};

export default Products;
