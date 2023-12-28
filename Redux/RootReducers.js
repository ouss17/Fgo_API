import { combineReducers } from "redux";
import AllServantsNiceReducer from "./reducers/AllServantsNiceReducer";
import AllServantsBasicReducer from "./reducers/AllServantsBasicReducer";
import AllServantsBasicNAReducer from "./reducers/AllServantsBasicNAReducer";
import OneServantReducer from "./reducers/OneServantReducer";
import RandomServantReducer from "./reducers/RandomServantReducer";

const RootReducers = combineReducers({
  AllServantsNiceReducer,
  AllServantsBasicReducer,
  AllServantsBasicNAReducer,
  OneServantReducer,
  RandomServantReducer,
});

export default RootReducers;
