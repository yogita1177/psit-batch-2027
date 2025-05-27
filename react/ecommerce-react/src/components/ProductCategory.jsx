function ProductCategory(props) {
  const { name, image } = props.categoryDetails;

  return (
    <div className='category'>
      <img src={image} alt='' />
      <h3>{name}</h3>
    </div>
  );
}

export default ProductCategory;
