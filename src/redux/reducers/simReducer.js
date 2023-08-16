import ACTIONS from "../actions/index";

const token = {
    simAll: []
};

const simReducer = (state = token, action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL_SIM:
            {
                return {
                    ...state,
                    simAll: action.payload,
                };
            }
        default:
            {
                return state;
            }
    }
};

export default simReducer;