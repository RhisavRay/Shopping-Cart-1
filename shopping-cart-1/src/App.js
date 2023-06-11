import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'

function App()
{

  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])

  return (
    <>
      <Navbar size = {cart.length}/>
      <Products/>
      <Cart/>
    </>
  );
}

export default App;
