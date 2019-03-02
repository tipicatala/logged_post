export default function(state=false, action){
    switch(action.type){
        case 'TOGGLE':
        return !state;
        case 'NOT_L':
        return state;
        default:
        return state;

    }
}