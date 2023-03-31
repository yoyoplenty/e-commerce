import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  image: {
    height: 250,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
