// import constant
import {
    BIT_MODEL
} from '../constant';

const initialState = {
    show: false,
};

const BitModalStatus = (state = initialState, action) => {
    switch (action.type) {
        case BIT_MODEL:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export default BitModalStatus;