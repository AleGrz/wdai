import Product from "./product";
import styles from "./cart.module.css";

function Cart() {
  return (
    <div className={styles.cart}>
      <Product name="Apple" />
      <Product name="Banana" />
      <Product name="Cherry" />
      <Product name="Orange" />
      <Product name="Pineapple" />
    </div>
  );
}

export default Cart;
