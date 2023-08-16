import ACTIONS from "../actions/index";

const token = {
    tokenShipper: "",
    tokenAdmin: "",
    tokenAgent: ""
};

const tokenReducer = (state = token, action) => {
    switch (action.type) {
        case ACTIONS.GET_TOKEN_SHIPPER:
            {
                return {
                    ...state,
                    tokenShipper: action.payload,
                };
            }
        case ACTIONS.GET_TOKEN_AGENT:
            {
                return {
                    ...state,
                    tokenAgent: action.payload,
                };
            }
        case ACTIONS.GET_TOKEN_ADMIN:
            {
                return {
                    ...state,
                    tokenAdmin: action.payload,
                };
            }
        default:
            {
                return state;
            }
    }
};

export default tokenReducer;