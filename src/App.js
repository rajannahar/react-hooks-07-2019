import React from 'react';
import CountButton from './components/CountButton'
import ToggleButton from './components/ToggleButton'
import CartItems from './components/CartItems'

import Todo from './components/Todo'

const App = () => {
  return (
    <div>
      <h1>Index</h1>

      <CountButton />
      <hr />

      <ToggleButton />
      <hr />

      <CartItems />
      <hr />

      <Todo />

    </div>
  );
}

export default App;
