import productCategories from '../data/products-category';
import ProductCategory from './ProductCategory';

function ListProductCategories() {
  return (
    <section className='categories'>
      <h1>Shop by Category</h1>
      <div className='categories-grid'>
        {productCategories.map((category) => (
          <ProductCategory
            key={category.id}
            categoryDetails={{
              name: category.name,
              image: category.image,
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default ListProductCategories;
