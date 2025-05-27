function ProductCard(props) {
  const { name, price, image } = props.productDetails;
  return (
    <div class='product-card'>
      <img src={image} alt='' />
      <h3>{name}</h3>
      <div class='product-info'>
        <p>{price / 100}/-</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
