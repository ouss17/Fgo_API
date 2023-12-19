import {
    GET_SERVANTS_BASIC,
} from "../actions/types";
const initialState = [];

const AllServantsBasicReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case GET_SERVANTS_BASIC:
            return payload;
            break;
        default:
            return state;
            break;
    }
};

export default AllServantsBasicReducer;
