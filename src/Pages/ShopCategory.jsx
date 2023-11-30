// ShopCategory.jsx
import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const categoryProducts = all_product.filter(item => item.category === props.category);

  return (
    <div className='shop-category'>
      <div className="shopcategory-products">
        {categoryProducts.map((item) => (
          <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
