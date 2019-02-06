import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibility } from '../actions';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/constants';

class TodoFilter extends Component{
    setVisibility(text){
        this.props.setVisibility(text);
    }

    // componentDidMount(){
    //     window.document.addEventListener('keydown', (e)=>{
    //         switch(e.keycode){
    //             case 90:
    //                 this.setVisibility(SHOW_ALL);
    //                 break;
    //             case 88:
    //                 this.setVisibility(SHOW_ACTIVE);
    //                 break;
    //             case 67:
    //                 this.setVisibility(SHOW_COMPLETED);
    //             default:
    //                 break;
    //         }
    //     })
    // }

    render(){
        return(
            <div>
                <span className="text-uppercase">show:</span>
                <button className="filter btn btn-success m-2" onClick={()=>this.setVisibility(SHOW_ALL)}>All</button>
                <button className="filter btn btn-success m-2" onClick={()=>this.setVisibility(SHOW_ACTIVE)}>Active</button>
                <button className="filter btn btn-success m-2" onClick={()=>this.setVisibility(SHOW_COMPLETED)}>Completed</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
   setVisibility: (visibilityText) =>dispatch(setVisibility(visibilityText)),
});

export default connect(null,mapDispatchToProps)(TodoFilter);