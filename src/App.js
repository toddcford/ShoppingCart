import React, {useState} from 'react';
import Header from './components/Header'
import Products from './components/Products'
import Cart from './components/Cart'
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([])  
  
  const products = [{"name":"Macbook", "price": 1400, "img_ext":"Images/Macbook.jpg"}, {'name':'Roku', 'price':175, "img_ext":"Images/Roku.jpg"},{"name":"IPhone", "price": 600, "img_ext":"Images/Iphone.jpg", "picture":"tall"},{"name":"Tesla","price":38000, "img_ext":"Images/Tesla.jpeg"}, {"name":"Kindle", "price": 99, "img_ext":"Images/Kindle.jpg"}, {"name": "Apple Watch", "price": 150, "img_ext":"Images/Apple_Watch.jpg"}];
  let subTotal = 0;
  let quantity_total = 0;
  for (const product of cartItems) {
    subTotal += product.price*product.quantity;
    quantity_total += product.quantity
  }
  
  return (
    <div className="App">
      
      <Header cart_quantity={quantity_total}/>
      <div className='products-cart-wrapper'>
      <Products products={products} cartItems={cartItems} onItemAdd={setCartItems}/>
      {/* <Cart cart_items={cartItems} onItemAdd={setCartItems} subtotal={subTotal}/>  */}
      <Cart cart_items={cartItems} onItemAdd={setCartItems} subtotal={subTotal}/> 
      </div>
    </div>
  );
}

export default App;
