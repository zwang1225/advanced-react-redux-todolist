import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

class TodoItem extends Component{
    constructor(props){
        super(props);
    }

    deleteTodo(id){
        this.props.deleteTodo(id);
        // console.log(this.props.todo.id)
    }

    render(){
        return(
            <li className="list-group-item align-middle">
            <span onClick={this.props.onClick}  
            style = {this.props.completed?{textDecoration:'line-through'}:{textDecoration:'none'}}>{this.props.todo.text}</span>
            <p style={{float:'right'}}>{this.props.date}</p>
            <button className="btn btn-danger d-block" onClick={()=>this.deleteTodo(this.props.todo.id)}>delete</button>
            </li>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    deleteTodo: (id) =>dispatch(deleteTodo(id))
})

export default connect(null,mapDispatchToProps)(TodoItem);