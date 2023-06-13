import React from 'react'
import list from '../data'
import '../styles/products.css'
import Cards from './Cards'

const Products = ({handleClick}) => {
  return (
    <section>
        {list.map((item) => (
            <Cards item = {item} key={item.id} handleClick = {handleClick}/>
        ))}
    </section>
  )
}

export default Products