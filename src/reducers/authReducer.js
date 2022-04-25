import {
    SET_CURRENT_USER
} from "../constant";

const initialState = {
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    
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

export default authReducer; 