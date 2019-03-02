import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';




class Box extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comment:''
        }
    }

    addComment=(e)=>{
        this.setState({comment: e.target.value})
    }

    renderComment(){
        this.props.yourpost(this.state.comment)
    }

    render(){
        if(this.props.auth){
        return (
            <div>
                <h3>Post a comment</h3>
                <input onChange={(e)=>this.addComment(e)}></input> 
                {this.renderComment()}
            </div>
        )
        }else{
            return <p>You are not logged in</p>
        }
    }

}

const mapStateToProps= ({auth,post}) => ({auth,post})


export default connect(mapStateToProps,actions)(Box);
