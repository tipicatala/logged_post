import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions'

class List extends Component {

    renderComments=()=>{
        
        return this.props.comments.map((item,idx)=>{
            return <li key={idx}>{item.name}</li>
        })
    }

    add=(comment)=> {
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(comment));
        ul.appendChild(li);
      }

    renderButton(){
        if(this.props.auth)
        return <button id='get' onClick={()=>this.addComment(this.props.post)}>Post your comment</button> 

    }  

    render(){
        return (
        <div>
            <h3>List</h3>
            <button id='get' onClick={this.props.fetchComments}>Get</button>
            <ul id='list'>
                {this.renderComments()}
            </ul>
            {this.renderButton()}
        </div>
        )
    }

}

const mapStateToProps= ({comments,post,auth}) => ({comments,post,auth})


export default connect(mapStateToProps,actions)(List);


