import React, { useState } from 'react'

function CartItems() {

  const [cartItems, setCartItems] = useState([])

  const handleAddItem = () => setCartItems([...cartItems, 'apple'])

  return (

    <div>
      <button onClick={handleAddItem}>Add item to cart</button>

      <p>Items in your cart: {cartItems.toString()}</p>
    </div>

  )
}

export default CartItems
