import React from 'react';
import SearchPanel from "../SearchPanel";
import AppHeader from "../AppHeader";
import TodoList from "../TodoList";
import './App.css';
import ItemStatusFilter from "../ItemStatusFilter";
import AddItemForm from "../AddItemForm";
import {FilterTypes} from "../../consts/consts";

export default class App extends React.Component {

    state = {
        todoData: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Create react app'),
            this.createTodoItem('Eat olivie')
        ],
        searchText: ``,
        filterType: FilterTypes.ALL
    }

    createTodoItem(label) {
        return {
            id: Math.abs(Math.floor(Math.random() * 100)),
            label,
            important: false,
            done: false
        }
    }

    toggleBoolPropState = (id, prop) => {
        this.setState(({todoData}) => {
            return {
                todoData: todoData.map(item => {
                    return item.id === id ? {...item, [prop]: !item[prop]} : item;
                })
            };
        });
    }

    deleteItemHandler = (id) => {
        this.setState((state) => {
            return {todoData: state.todoData.filter(item => item.id !== id)}
        })
    }

    addItemHandler = (label) => {
        this.setState(state => ({todoData: [...state.todoData, this.createTodoItem(label)]}))
    }

    toggleImportantItemHandler = (id) => {
        this.toggleBoolPropState(id, 'important');
    }

    toggleDoneItemHandler = (id) => {
        this.toggleBoolPropState(id, 'done');
    }

    changeSearchTextHandler = (text) => {
        this.setState({searchText: text});
    }

    changeFilterTypeHandler = (type) => {
        this.setState({filterType: type});
    }

    filterTodoList = () => {
        const {todoData, searchText, filterType} = this.state;
        const isDone = filterType === FilterTypes.DONE;
        let result = [...todoData];
        if (searchText) {
            result = todoData.filter(item => item.label.toLowerCase().includes(searchText.toLowerCase()));
        }

        if (filterType !== FilterTypes.ALL) {
            result = result.filter(item => item.done === isDone);
        }

        return result;
    }

    render() {
        const items = this.state.todoData;
        return (<div className="todo-app">
            <AppHeader items={items}/>
            <div className="top-panel d-flex">
                <SearchPanel
                    searchText={this.state.searchText}
                    onChangeSearchText={this.changeSearchTextHandler}
                />
                <ItemStatusFilter
                    currentType={this.state.filterType}
                    onChangeFilterType={this.changeFilterTypeHandler}
                />
            </div>
            <TodoList
                items={this.filterTodoList()}
                onDeleteItem={this.deleteItemHandler}
                onToggleImportant={this.toggleImportantItemHandler}
                onToggleDone={this.toggleDoneItemHandler}
            />
            <AddItemForm onAddItem={this.addItemHandler}/>
        </div>);
    }
}
