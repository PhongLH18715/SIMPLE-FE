import ACTIONS from '../actions/index'

const registerCourses = []


const coursesReducer = (state = registerCourses, action) => {
    switch (action.type) {
        case ACTIONS.GET_CHECK_REGISTER:
            {
                return action.payload
            }
        default:
            {
                return state
            }
    }
}

export default coursesReducer