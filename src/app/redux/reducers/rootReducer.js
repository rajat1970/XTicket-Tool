import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import commonReducer from "./commonReducers";
import ticketListingReducer from "./ticketListingReducer";
import * as types from "../actionTypes";
import manageAccessReducer from "./manageAccessReducer";

const appreducer = combineReducers({
  login: loginReducer,
  common: commonReducer,
  ticketList: ticketListingReducer,
  manageAccess: manageAccessReducer
});

const rootReducer = (state, action) => {
  switch (action.type) {
    case types.RESET_LOGIN_CREDS: {
      state = undefined;
      return appreducer(state, action);
    }
    default: {
      return appreducer(state, action);
    }
  }
};
export default rootReducer;
