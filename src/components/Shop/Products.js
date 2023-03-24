import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "My First Book",
    price: 400,
    description: "The first book I ever bought",
  },
  {
    id: "p2",
    title: "My Second Book",
    price: 632,
    description: "The second book I ever bought",
  },
  {
    id: "p3",
    title: "My Third Book",
    price: 864,
    description: "The third book I ever bought",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
