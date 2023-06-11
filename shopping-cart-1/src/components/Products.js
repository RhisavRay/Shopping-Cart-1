import React from 'react'
import list from '../data'
import '../styles/amazon.css'
import Cards from './Cards'

const Products = () => {
  return (
    <section>
        {list.map((item) => (
            <Cards item = {item}/>
        ))}
    </section>
  )
}

export default Products