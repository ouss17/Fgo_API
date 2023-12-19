import { combineReducers } from "redux";
import AllServantsNiceReducer from "./reducers/AllServantsNiceReducer";
import AllServantsBasicReducer from "./reducers/AllServantsBasicReducer";
import OneServantReducer from "./reducers/OneServantReducer";
import RandomServantReducer from "./reducers/RandomServantReducer";

const RootReducers = combineReducers({
  AllServantsNiceReducer,
  AllServantsBasicReducer,
  OneServantReducer,
  RandomServantReducer,
});

export default RootReducers;
