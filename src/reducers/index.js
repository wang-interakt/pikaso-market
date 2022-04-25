import { combineReducers } from "redux";
import authReducer from "./authReducer";
// import errorReducer from "./errorReducers";

// common
import modal from './modal';
import form from './form';
import currentUser from './currentUser';
import TokenidReucer from './TokenidReucer';
import PaymentModal from './PaymentModal';
import BitidReucer from './BitidReucer';
import BitModalStatus from './BitModalStatus';
import ReportModalStatus from './ReportModalStatus';
import Reportreducer from './Reportreducer';

export default combineReducers({
    auth: authReducer,
    modal: modal,
    form,
    TokenidReucer,
    PaymentModal,
    BitidReucer,
    BitModalStatus,
    ReportModalStatus,
    Reportreducer
});