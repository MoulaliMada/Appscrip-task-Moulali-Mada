import "./index.css";

function ProductItem(props) {
  const { product } = props;
  console.log(product);
  const { image, price, title, isLiked } = product;
  return (
    <li className="product-item">
      <div className="image-container">
        <img src={image} alt={title} className="item-img" />
      </div>
      <div>
        <p className="item-title">{title}</p>
      </div>
    </li>
  );
}
export default ProductItem;
