import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:''
        }
    }

    
    infoEmail=(e)=>{

        this.setState({email: e.target.value});
    }

    infoPass=(e)=>{

        this.setState({password: e.target.value});
    }



    renderButton=()=>{
         if (this.props.auth){
            return <button id='submit' type='button' onClick={()=>this.props.signout()}>SignOut</button>

        }else
            return (
            <div>
                <button id='submit' type='button' onClick={()=>this.props.toggle(this.state.email, this.state.password)}>Login</button>
                <p>You are not logged in</p>
            </div>
            )        
        }
    
    
    render(){
        return(
            <div>
            <h3>Login</h3>
            <div className='login-page'>
            <form className='login-form'>
            
                <input id='e' placeholder="e-mail" onChange={(e)=>this.infoEmail(e)}/>
                <input id='p' placeholder="password" onChange={(e)=>this.infoPass(e)}/>

                {this.renderButton()}

                
            </form>
            </div>
            </div>
        )
    }
}

const mapStateToProps= ({auth}) => ({auth})


export default connect(mapStateToProps,actions)(Login);
