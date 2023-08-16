import ACTIONS from '../actions/index'

const courses = {
    coursesUser: [],
    videoAll: [],
    coursesTrainer: [],
    courseVideo: []
}


const coursesReducer = (state = courses, action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL_COURSES_TRAINER:
            {
                return {
                    coursesTrainer: action.payload
                }
            }
        case ACTIONS.GET_ALL_COURSES_USER:
            {
                // console.log(action.payload)
                let arrvideoAll = action.payload.map(current => current.videoUrl)
                return {...state,
                    coursesUser: action.payload,
                    videoAll:arrvideoAll
                }
            }
        case ACTIONS.GET_COURSES_USER_VIDEO:{
                return {
                    courseVideo: action.payload
                }
        }
        default:
            {
                return state
            }
    }
}

export default coursesReducer