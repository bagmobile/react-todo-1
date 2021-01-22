import React from 'react';
import './AppHeader.css'

const AppHeader = ({items}) => {
    const {toDo, done} = items.reduce((result, item) => {
        item.done ? result.done++ : result.toDo++;
        return result;
    }, {toDo: 0, done: 0});
    return (
        <div className="app-header d-flex">
            <h1>Todo List</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </div>
    );
}

export default AppHeader;
