// import constant
import {
    REPORT_ID
} from '../constant';

const initialState = {
    reportid: false
};

const ReportReducer = (state = initialState, action) => {
    switch (action.type) {
        case REPORT_ID:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export default ReportReducer;