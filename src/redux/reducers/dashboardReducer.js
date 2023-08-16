import ACTIONS from "../actions/index";

const initialState = {
    // dashboardTrainer: [],
    dashboardAdmin: [],
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ACTIONS.GET_DASHBOARD_TRAINER:
        //     {
        //         return {
        //             ...state,
        //             dashboardTrainer: action.payload,
        //         };
        //     }
        case ACTIONS.GET_DASHBOARD_ADMIN:
            {
                return {
                    ...state,
                    dashboardAdmin: action.payload,
                };
            }
        default:
            {
                return state;
            }
    }
};
export default dashboardReducer;