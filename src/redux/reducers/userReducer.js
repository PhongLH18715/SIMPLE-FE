import ACTIONS from '../actions/index'

const users = {
    user: [],
    userForAdmin: [],
    cartUser: []
}

const userReducer = (state = users, action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL_USER:
            {
                return {
                    ...state,
                    user: action.payload
                }
            }
        case ACTIONS.GET_ALL_USER_FORAD:
            {
                return {
                    ...state,
                    userForAdmin: action.payload
                }
            }
        case ACTIONS.GET_ALL_CART:
            {
                console.log(action.payload)
                return {
                    ...state,
                    cartUser: action.payload
                }
            }
        default:
            {
                return state;
            }
    }
}
export default userReducer