import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <Typography variant="subtitle1">
      You have no items in your shopping cart
      <Link to={"/"} className="nav-link">
        Start By Adding Some!
      </Link>
    </Typography>
  );
};

export default EmptyCart;
