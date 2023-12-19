import {
    GET_SERVANT,
} from "../actions/types";
const initialState = [];

const OneServantReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case GET_SERVANT:
            return payload;
            break;
        default:
            return state;
            break;
    }
};

export default OneServantReducer;
