import React from 'react'

export default function EachTodo({todo,ondelete}) {
    return (
        <div>
            <h5>{todo.task}</h5>
            <h5>{todo.time}</h5>
            <button onClick={()=> {ondelete(todo)}}>Delete</button>
            <br/>
            <br/>
        </div>
    )
}
