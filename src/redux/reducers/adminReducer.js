import ACTIONS from "../actions/index";

const adminTotal = {
    locality: [],
};

const adminReducer = (state = adminTotal, action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL_LOCALITY:
            {
                return{
                    ...state,
                    locality: action.payload
                }
            }
       
        default:
            {
                return state;
            }
    }
};

export default adminReducer;