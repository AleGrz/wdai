type ProductProps = {
  name: string;
};

function Product(props: ProductProps) {
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  );
}

export default Product;
