export default function(state=[],action){
    switch(action.type){
        case 'FETCH_COMMENT':
        return action.payload.data.slice(0,10) 
        default: 
            return state
    
    }
}