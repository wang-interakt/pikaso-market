// import constant
import {
    TOKEN_BIT_ID
} from '../constant';

const initialState = {
    tokenbitid: false,
    editbit: null,
};

const BitidReucer = (state = initialState, action) => {
    switch (action.type) {
        case TOKEN_BIT_ID:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export default BitidReucer;