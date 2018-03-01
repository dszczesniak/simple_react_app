export default function(state={}, action){
    switch(action.type){
        case 'GET_PEOPLE':
            return {...state,list:action.payload};
        case 'ADD_PERSON':
            return {state,success:action.payload}
        default:
            return state;
    }
}