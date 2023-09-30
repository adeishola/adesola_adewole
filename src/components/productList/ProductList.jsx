import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="p1">
      <div className="p1-texts">
        <h1 className="p1-title">Take a peek at some projects</h1>
        <p className="p1-desc">
          A blend of different technologies have been used to create the web
          applications below. Real-life applications and a whole lot more
          inside.
        </p>
      </div>
      <div className="p1-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
