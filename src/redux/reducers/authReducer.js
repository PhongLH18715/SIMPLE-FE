import ACTIONS from "../actions/index";

const initialState = {
    user: [],
    admin: [],
    isLogged: false,
    isShipper: false,
    isAdmin: false,
    isAgent: false,
    // allHistory: [],
    // allCateSkill: []
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.LOGIN_ADMIN:
            {
                return {
                    ...state,
                    isAdmin: true,
                };
            }
        case ACTIONS.LOGIN_AGENT:
            {
                return {
                    ...state,
                    isAgent: true,
                };
            }
        case ACTIONS.LOGIN_SHIPPER:
            {
                return {
                    ...state,
                    isShipper: true,
                };
            }
        // case ACTIONS.GET_USER:
        //     {
        //         return {
        //             ...state,
        //             user: action.payload.user,
        //             isAdmin: action.payload.isAdmin,
        //             isUser: action.payload.isUser,
        //         };
        //     }
        case ACTIONS.GET_ADMIN:
            {
                return {
                    ...state,
                    admin: action.payload.admin,
                };
            }
        // case ACTIONS.GET_ALL_TRAINER_VIEW:
        //     {
        //         return {
        //             ...state,
        //             allTrainerView: action.payload,
        //         };
        //     }
        // case ACTIONS.GET_ADMIN_HISTORY:
        //     {
        //         return {
        //             ...state,
        //             allHistory: action.payload,
        //         };
        //     }
        // case ACTIONS.GET_ALL_CATE_SKILL:
        //     {
        //         return {
        //             ...state,
        //             allCateSkill: action.payload,
        //         };
        //     }
        default:
            {
                return state;
            }
    }
};
export default authReducer;