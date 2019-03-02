import axios from 'axios';




export  function fetchComments(){

    const response = axios.get('https://jsonplaceholder.typicode.com/comments');
    return {
        type: 'FETCH_COMMENT',
        payload: response,
        
    }
}



export  function toggle(email, pass){
    if ( email==='test@mail.ru' && pass==='123' ){
    return {
        type: 'TOGGLE',
    }
    }else{
        
        return {type: 'NOT_L'}
    }
}

export  function signout(){
    return {
        type: 'TOGGLE',
    }
}

export  function yourpost(string){
    return {
        type: 'POST',
        payload: string
    }
}



