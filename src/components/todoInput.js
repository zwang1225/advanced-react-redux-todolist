import React, { Component } from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';
 
class TodoInput extends Component{
    constructor(){
        super();
        this.state={
            inputVal:'',
            disable: true
        }
    }

    handleInput(e){
        this.setState({
            inputVal:e.target.value
        },()=>{
            !this.state.inputVal==''?this.setState({
                disable:false
            }):
            this.setState({
                disable:true
            })
        })
    }

    handleKeyDown(e){
        if(!this.state.disable){
        switch(e.keyCode){
            case 13:
                this.handleSubmit();
                break;
            default:
                return;
        }
    }   
    }

    handleSubmit(){
        let myDate = new Date();
        let day = myDate.getDay();
        let month = myDate.getMonth()+1;
        let year = myDate.getFullYear();
        let hour = myDate.getHours();
        let minute = myDate.getMinutes();
        let sec = myDate.getSeconds();
        if (day < 10) {
            day = '0' + day;
          } 
          if (month < 10) {
            month = '0' + month;
          } 
        let dateString =  day + '/' + month + '/' + year + '/' + hour + ':' +minute + ':' + sec;
        this.props.addTodo(this.state.inputVal,dateString)
    }

    render(){
        return(
                <div className="w-100 mt-2">
                <input type="text" name="itemInput" placeholder="add your todos here..." className="d-inline"
                value={this.state.inputVal}
                onChange={this.handleInput.bind(this)}
                onKeyDown={this.handleKeyDown.bind(this)}
                />
                <button 
                className="btn btn-primary ml-2" 
                onClick={this.handleSubmit.bind(this)}
                disabled={this.state.disable}
                >add todo</button>
                </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    addTodo: (text,date) =>dispatch(addTodo(text,date)),
});

export default connect(null,mapDispatchToProps)(TodoInput);