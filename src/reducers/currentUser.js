// import constant
import {
    SET_CURRENT_USER
} from '../constant';

const currentUser = (state = {}, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export default currentUser;