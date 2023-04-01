import { useContext } from "react";
import { Grid } from "@material-ui/core";

import useStyles from "./styles";

import { Product } from "../../components";
import { iProduct } from "../../data/product";
import { ProductContext } from "../../context/product";

const Products = () => {
  const styles = useStyles();

  const { products }: any = useContext(ProductContext);

  return (
    <main className={`${styles.content} mt-5`}>
      <div className={`${styles.toolbar} pt-2`}>
        <Grid container justify-content="center" spacing={4}>
          {products.map((product: iProduct) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  );
};

export default Products;
