import ACTIONS from "../actions/index";

const agentTotal = {
    AllAgent: [],
    AllOrder: [],
    AllShipper: []
};

const categoryReducer = (state = agentTotal, action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL_UGENT:
            {
                return{
                    ...state,
                    AllAgent: action.payload
                }
            }
        case ACTIONS.GET_ALL_ORDER:
            {
                return{
                    ...state,
                    AllOrder: action.payload
                }
            }
        case ACTIONS.GET_ALL_SHIPPER:
            {
                return{
                    ...state,
                    AllShipper: action.payload
                }
            }
        default:
            {
                return state;
            }
    }
};

export default categoryReducer;