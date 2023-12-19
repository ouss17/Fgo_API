import {
    GET_SERVANT_RANDOM,
} from "../actions/types";
const initialState = [];

const RandomServantReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case GET_SERVANT_RANDOM:
            return payload;
            break;
        default:
            return state;
            break;
    }
};

export default RandomServantReducer;
