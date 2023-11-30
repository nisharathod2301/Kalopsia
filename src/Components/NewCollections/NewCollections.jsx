import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'
const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>Jewelry</h1>
        <p>Bold silhouettes, eye-catching details and unexpected forms prove that sometimes, one piece makes the most memorable statement of all.</p>
        <hr />
        <div className="collections">
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollections