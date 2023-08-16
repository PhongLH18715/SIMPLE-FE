import ACTIONS from "../actions/index";

const categoryVideo = [];

const categoryReducer = (state = categoryVideo, action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL_CATE_VIDEO:
            {
                console.log('data',  action.payload)
                return action.payload;
            }
        case ACTIONS.GET_ALL_CATE_ADMIN:
            {
                return action.payload;
            }
        case ACTIONS.GET_ALL_CATE_VIDEO_ADMIN:
            {
                return action.payload;
            }
        default:
            {
                return state;
            }
    }
};

export default categoryReducer;