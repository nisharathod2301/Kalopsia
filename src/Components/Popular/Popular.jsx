import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const Popular = () => {
  return (
    <div className='popular'>
        <h1>New In</h1>
        <p>With immaculate tailoring and superior artisanship, each piece of Kalopsia ready-to-wear has been thoughtfully crafted!</p>
        <hr />
        <div className="popular-item">
            {data_product.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular