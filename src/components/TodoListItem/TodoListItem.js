import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({label, important, done, onDeleteItem, onToggleImportant, onToggleDone}) => {

    return (
        <div className={`todo-list-item ${done && 'done'} ${important && 'important'}`}>
            <span
                className="todo-list-item-label"
                onClick={onToggleDone}
            >
            {label}
            </span>
            <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportant}
            >
                <i className="fa fa-exclamation"/>
            </button>
            <button
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleteItem}
            >
                <i className="fa fa-trash-o"/>
            </button>
        </div>
    );
}

export default TodoListItem;
