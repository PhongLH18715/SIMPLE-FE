import ACTIONS from "../actions/index";

const discovery = {
    listDiscovery: [],
    listLikeUser: [],
};

const discoveryState = (state = discovery, action) => {
    switch (action.type) {
        case ACTIONS.GET_USER_LIKE_DISCOVERY:
            {
                return {
                    ...state,
                    listLikeUser: action.payload,
                };
            }
        case ACTIONS.GET_DISCOVERY_USER:
            {
                return {
                    ...state,
                    listDiscovery: action.payload,
                };
            }
        default:
            return state;
    }
};

export default discoveryState;