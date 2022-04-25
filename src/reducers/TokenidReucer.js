// import constant
import {
    TOKEN_ID
} from '../constant';

const initialState = {
    tokenid: false,
};

const TokenidReucer = (state = initialState, action) => {
    switch (action.type) {
        case TOKEN_ID:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export default TokenidReucer;