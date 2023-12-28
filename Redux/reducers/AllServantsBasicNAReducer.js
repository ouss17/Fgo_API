import {
    GET_SERVANTS_BASIC_NA,
} from "../actions/types";
const initialState = [];

const AllServantsBasicNAReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case GET_SERVANTS_BASIC_NA:
            return payload;
            break;
        default:
            return state;
            break;
    }
};

export default AllServantsBasicNAReducer;
