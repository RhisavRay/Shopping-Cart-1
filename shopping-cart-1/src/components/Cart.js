import React, {useState} from 'react'
import '../styles/cart.css'

const Cart = ({cart, setCart}) => {

  const [price, setPrice] = useState(0)

  return (
    <article>
      {
        cart.map((item) => {
          <div className='cart_box' key={item.id}>
            <div className='cart_img'>
              <img src={item.img} />
              <p>{item.title}</p>
            </div>
            <div>
              <button>+</button>
              <button>-</button>
            </div>
            <div>
              <span>{item.price}</span>
              <button>Remove</button>
            </div>
          </div>
        })
      }
      <div>
        <span>Total: </span>
        <span>Rs.{price}</span>
      </div>
    </article>
  )
}

export default Cart