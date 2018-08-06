import React, {Component} from 'react';
import {connect} from 'react-redux';
import './post.css'

class Post extends Component {
    render() {
        return (
            <div className="post-comp">
                <h2 className="post_title">{this.props.post.title}</h2>
                <p className="post_message">{this.props.post.message}</p>
                <div className="control-buttons">
                <button
                onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})}>
                Edit</button>
                <button 
                onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}>
                Delete</button>
                </div>
            </div>
        )
    }
}

export default connect()(Post);