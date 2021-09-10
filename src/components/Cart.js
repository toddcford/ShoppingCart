import React from 'react'

//CLEAN UP

export default function Cart(props) {

  const increaseQuantity = (name, price) => {
    for (let product of props.cart_items) {
      if (product.name === name) {
        var result = props.cart_items.filter(obj => {
          return obj.name !== name;
        })
        result.push({"name": name, 'price': price, 'quantity': product.quantity+1})
        props.onItemAdd(result)
      }
    }
  }
  const decreaseQuantity = (name, price) => {
    for (let product of props.cart_items) {
      if (product.name === name) {
        var result = props.cart_items.filter(obj => {
          return obj.name !== name;
        })
        result.push({"name": name, 'price': price, 'quantity': product.quantity-1})
        props.onItemAdd(result)
      }
    }
  }  
  function compare( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
  let cart_items = props.cart_items.sort( compare );
  cart_items = cart_items.map((item) => {return (
    <div className="items-in-cart">
      <div id="items-name">
        <h4 id="items">{item.name}</h4>
      </div> 
      <div id="items-price-quant">
        <button id="plus" onClick={()=>increaseQuantity(item.name, item.price)}>+</button>
        <button id="minus" onClick={()=>decreaseQuantity(item.name, item.price)}>-</button>
        <div className="quant-price">
          <h4 id="items2">{item.quantity}</h4>
          <h4 id="multiplication"> X </h4>
          <h4 className="price">{formatter.format(item.price)} </h4>
        </div>
      </div>
    </div>
    )})

  let tax = props.subtotal * .0625
  
  if (props.cart_items.length > 0) { 
    return (
      <div className='Cart'>
        <h4 className='centered-header'> Your Cart </h4>
        {cart_items}
        <hr></hr>
        <div className="tax"><h4 id='tax'>Tax:</h4> <h4 id="tax2"> {formatter.format(tax)}</h4> </div>
        <div className="total"><h4 id='total'>Subtotal:</h4> <h4 id="total2"> {formatter.format(props.subtotal + tax)}</h4></div>
        <div className="checkout-button-container"> <button id="checkout-button">Checkout </button> </div>
      </div>
    )} else {
      return (
      <div className='Cart'>
        <h4 className='centered-header'> Your Cart is Empty</h4>
        {cart_items}
        <hr></hr>
        <div className="tax"><h4 id='tax'>Tax:</h4> <h4 id="tax2"> ${tax}</h4> </div>
        <div className="total"><h4 id='total'>Subtotal:</h4> <h4 id="total2"> {formatter.format(props.subtotal + tax)}</h4></div>
        <div className="checkout-button-container"> <button id="checkout-button">Checkout </button> </div>
      </div>
      )
    }
  }
