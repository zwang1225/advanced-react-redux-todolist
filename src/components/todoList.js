import React, { Component } from 'react';
import TodoItem from './todoItem';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/constants';

class TodoList extends Component{
    constructor(props){
        super(props);
    }

    handleClick(todo){
        this.props.toggleTodo(todo.id);
    }

    render(){
        return(
            <div className="mt-1">
                <ul className="list-group w-50">{this.props.todos.map((todo)=>{
                    switch(this.props.visibility){
                        case SHOW_ALL:
                            return (<TodoItem completed={todo.completed} 
                            key={todo.id} 
                            todo={todo} 
                            date={todo.date} 
                            onClick={()=>this.handleClick(todo)}/>)
                        case SHOW_ACTIVE:
                            if(todo.completed === false){
                            return(<TodoItem completed = {todo.completed}
                            key={todo.id}
                            todo={todo}
                            date={todo.date}
                            onClick={()=>this.handleClick(todo)}/>)
                        }else{
                            break;
                        }
                        case SHOW_COMPLETED:
                            if(todo.completed === true){
                            return(<TodoItem completed = {todo.completed}
                            key={todo.id}
                            todo={todo}
                            date={todo.date}
                            onClick={()=>this.handleClick(todo)}/>)
                        }else{
                            break;
                        }

                        default:
                            break;
                    }
                })}</ul>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return (
        {
        todos: state.todos,
        visibility: state.setVisibility
        }
    )
}

const mapDispatchToProps = dispatch => ({
    toggleTodo: (id) =>dispatch(toggleTodo(id)),
});


export default connect(mapStateToProps,mapDispatchToProps)(TodoList);