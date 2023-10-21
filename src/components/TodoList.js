import React from 'react'

const TodoList = (props) => {
    return (
        <li>
            <button className='bn' onClick={e => {
                props.deleteItem(props.index)
            }}>-</button>
            {props.item}
        </li>
    )
}

export default TodoList