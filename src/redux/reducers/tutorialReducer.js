import ACTIONS from "../actions/index";

const tutorials = {
    tutorialsUser: [],
    tutorialsTrainer: [],
    tutorialCourses: [],
    listLikeTutorial: [],
    listRegistedUser: [],
    tutorialLoginUser: [],
    tutorialFree: [],
    tutorialPayMoney: []
};

const tutorialReducer = (state = tutorials, action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL_TUTORIAL:
            {
                // let free = action.payload.filter(current => current.free === true)

                // console.log(state.tutorialFree)
                // let arr = [...state.tutorialFree]
                // arr = action.payload.filter(current => current.free === true)
                state.tutorialFree = action.payload.filter(current => current.free === true)
                state.tutorialPayMoney = action.payload.filter(current => current.free !== true)
                return {
                    ...state
                };
            }
        case ACTIONS.GET_ALL_TUTORIAL_TRAINER:
            {
                return {
                    ...state,
                    tutorialsTrainer: action.payload,
                };
            }
        case ACTIONS.GET_COURSES_TURORIAL:
            {
                return {
                    ...state,
                    tutorialCourses: action.payload,
                };
            }
        case ACTIONS.GET_LIST_USER_LIKE_TUTORIAL:
            {
                return {
                    ...state,
                    listLikeTutorial: action.payload,
                };
            }
        case ACTIONS.GET_USER_REGISTED:
            {
                return {
                    ...state,
                    listRegistedUser: action.payload,
                };
            }
        case ACTIONS.GET_ALL_TUTORIAL_LOGIN:
            {
                return {
                    ...state,
                    tutorialLoginUser: action.payload,
                };
            }
        default:
            {
                return state;
            }
    }
};

export default tutorialReducer;