import React from 'react';
import TodoListItem from "../TodoListItem";
import './TodoList.css'

const TodoList = ({items, onDeleteItem, onToggleImportant, onToggleDone}) => {
    return (
        <ul className="list-group todo-list">
            {items.map((item) => {
                const {id, ...itemProps} = item;
                return (<li key={id} className="list-group-item">
                        <TodoListItem
                            {...itemProps}
                            onDeleteItem={() => onDeleteItem(id)}
                            onToggleImportant={() => onToggleImportant(id)}
                            onToggleDone={() => onToggleDone(id)}
                        />
                    </li>
                );
            })}
        </ul>);
}

export default TodoList;
