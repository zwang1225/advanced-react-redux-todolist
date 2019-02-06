import React, { Component } from 'react';
import TodoInput from '../../components/todoInput';
import TodoList from '../../components/todoList';
import TodoFilter from '../../components/todoFilter';

class TodoApp extends Component {
    render(){
        return(
            <div className="container">
                <div className="mx-auto p-0" style={{width:'350px'}}>
                    <h1>Todolist App</h1>
                    <TodoInput />
                    <TodoList />
                    <TodoFilter />
                </div>
            </div>
        )
    }
}

export default TodoApp;