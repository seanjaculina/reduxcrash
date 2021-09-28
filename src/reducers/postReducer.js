import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    // items array will represent the post that come from the action
    // item object will represent the post when the response is received
    items: [],
    item: {},
}

// this function will 'evaluate' the type of what we are dealing with
// the action will have a type and that is what we are evaluating inside of the function

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_POSTS:
            console.log('reducer');
            return {
                ...state,
                items: action.payload,      // .payload is the variable name from the postActions file that we named in the dispatch function
            };
        case NEW_POST:
            return{
                ...state,
                item: action.payload,
            };
        default:
            return state;
    }
}