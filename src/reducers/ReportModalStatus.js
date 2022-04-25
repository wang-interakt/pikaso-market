// import constant
import {
    REPORT_MODEL
} from '../constant';

const initialState = {
    showreport: false,
};

const ReportModalStatus = (state = initialState, action) => {
    switch (action.type) {
        case REPORT_MODEL:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export default ReportModalStatus;