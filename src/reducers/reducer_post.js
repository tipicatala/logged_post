export default function(state='',action){
    switch(action.type){
        case 'POST':
        return action.payload
        default: 
            return state
    
    }
}