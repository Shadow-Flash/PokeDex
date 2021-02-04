import {DETAILS} from '../actions/types';

const defaultState = {
    name:"",
    experience:"",
    height:0,
    moves:[],
    type:"",
    weight:0,
}

export default (state = defaultState,action) => {
    switch(action.type){
        case DETAILS:
            return {
                ...state,
                
            };
    }
}