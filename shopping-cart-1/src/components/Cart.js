import React, {useEffect, useState} from 'react'
import '../styles/cart.css'

const Cart = ({cart, setCart, handleChange}) => {

  const [price, setPrice] = useState(0)

  const handlePrice = () => {
    let ans = 0
    cart.map((item) => {
      ans += item.amount * item.price
    })
    setPrice(ans)
  }

  useEffect(() => {
    handlePrice()
  })

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id)
    setCart(arr)
  }

  return (
    <article>
      {
        cart.map((item) => (
          <div className='cart_box' key={item.id}>
            <div className='cart_img'>
              <img src={item.img} />
              <p>{item.title}</p>
            </div>
            <div className='plus_minus'>
              <button onClick = {() => handleChange(item, -1)}>-</button>
              <button>{item.amount}</button>
              <button onClick = {() => handleChange(item, +1)}>+</button>
            </div>
            <div>
              <span>Rs. {item.price}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))
      }
      <div className='total'>
        <span>Total: </span>
        <span>Rs. {price}</span>
      </div>
    </article>
  )
}

export default Cart