import React, { useReducer } from 'react'

const appReducer = (state=[], action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Date.now(),
          text: '',
          completed: false
        }
      ]

    case 'delete': {
      return state.filter(item => item.id !== action.payload);
    }

    default:
      return state;
  }
}

export default function Todo() {

  const [state, dispatch] = useReducer(appReducer, [])

  return (
    <div>
      <h2>Todo app</h2>
      <button onClick={ () => dispatch({type: 'add'})}>New todo</button>
      <TodoList items={state} />
    </div>
  )
}


const TodoList = ( {items} ) => {
  return items.map(item => <TodoItem key={item.id} {...item} />);
}

const TodoItem = ( {id, completed, text} ) => {
  return (
    <div>
      <input type="checkbox" checked={completed}></input>
      <input type="textbox" defaultValue={text}></input>

      {/* <button onClick={ () => dispatch({type: 'delete'})}>Delete</button> */}
      {/* Youtube video referece: https://www.youtube.com/watch?v=YKmiLcXiMMo&t=765s */}

    </div>
  )
}