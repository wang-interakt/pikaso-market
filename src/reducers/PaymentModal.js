// import constant
import {
    PAYMENT_MDL
} from '../constant';

const initialState = {
    show: false,
};

const PaymentModal = (state = initialState, action) => {
    switch (action.type) {
        case PAYMENT_MDL:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export default PaymentModal;