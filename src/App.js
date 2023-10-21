import React, { useState } from 'react'
import Todoinputs from './components/Todoinputs';
import TodoList from './components/TodoList';
import "./App.css";

function App() {
  const [listTodo, setListTodo] = useState([])
  let addList = (inputText) => {
    if (inputText !== '')
      setListTodo([...listTodo, inputText]);
  }
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
  }

  return (
    <div className="main">

      <div>
        <h1 id='no'>Todo List</h1>
        <Todoinputs addList={addList} />
        <hr></hr>
        <div>
          <h1>
            {listTodo.map((listItem, i) => {
              return (
                <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
              )
            })}
          </h1>
        </div>
      </div>
    </div >
  );
}

export default App;
