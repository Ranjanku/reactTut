import React from "react";

function TodoItemList(props) {
    return (
        <li className="todo-item">
            <span>
                 { props.completed? <></> : <input type="checkbox" />}
                <span>{props.text}</span>
            </span>
            
            <p>...</p>
        </li>
    )
}

export default TodoItemList;