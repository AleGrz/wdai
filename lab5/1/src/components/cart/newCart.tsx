import Product from "./product";
import styles from "./cart.module.css";

function NewCart() {
  const products: string[] = [
    "Apple",
    "Banana",
    "Cherry",
    "Orange",
    "Pineapple",
  ];

  return (
    <div className={styles.cart}>
      {products.map((p, id) => (
        <Product key={id} name={p} />
      ))}
    </div>
  );
}

export default NewCart;
