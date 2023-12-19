import {
    GET_SERVANTS_NICE,
} from "../actions/types";
const initialState = [];

const AllServantsNiceReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case GET_SERVANTS_NICE:
            return payload;
            break;
        default:
            return state;
            break;
    }
};

export default AllServantsNiceReducer;
