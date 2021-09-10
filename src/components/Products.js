import React from 'react'

function Item(props) {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const itemAlreadyAdded = (name, price) => {
    let added_already = false
    console.log("checking if", {name}, "has already added in ", props.cartItems);
    for (const product of props.cartItems) {
      if (product.name === name) {
        var result = props.cartItems.filter(obj => {
          return obj.name !== name;
        })
        result.push({"name": name, 'price':price, 'quantity': product.quantity+1})
        props.onItemAdd(result)
        added_already = true;
      }
    }
    return added_already;      
    
  }

  const handleClick = (name, price) => {
    if (!itemAlreadyAdded(name, price)) {
      let newCartItems = [...props.cartItems]
      newCartItems.push({"name": name, "price": price, "quantity":1})
      props.onItemAdd(newCartItems);
      // console.log(newCartItems)
    } 
  }
  return (
    <div className='Item'>
      
      {/* <img className="item-picture" src={process.env.PUBLIC_URL + "Images/Iphone.jpg"} alt=""></img> */}
      <div className="gallery-image"><img id={props.picture}className="item-picture" src={process.env.PUBLIC_URL + props.img_ext} alt=""></img></div>
      <h3 id="product-name" className='centered-header'> {props.name} </h3>
      <p id="product-price" className='centered-header'> {formatter.format(props.price)}</p>
      <button className="item-button" onClick={() => handleClick(props.name, props.price)}> Add to Cart </button>
    </div>
  )
}

export default function Products(props) {
  
  console.log(props.cartItems);
  let listed_products = props.products.map((product) => {
    console.log(props.img_ext)
    return <Item name={product.name} price={product.price} onItemAdd={props.onItemAdd} cartItems={props.cartItems} img_ext={product.img_ext} picture={product.picture}/>
  })
  return (
    <div className="Products">
      <h3 className='centered-header'> Add products to your cart </h3>
      
      <div className='products-container'>
        {listed_products}
      </div>
    </div>
  )
}