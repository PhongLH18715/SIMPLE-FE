import ACTIONS from './index'
import axios from 'axios'

export const fetchAllUsers = async(token) => {
    const res = await axios.get('/user/all_infor', { headers: { Authorization: token } })
    return res
}
export const dispatchGetAllUsers = (res) => {
    return {
        type: ACTIONS.GET_ALL_USER,
        payload: res.data
    }
}

export const fetchAllUsersForAdmin = async(token) => {
    const res = await axios.get('/admin/all_user', { headers: { Authorization: token } })
    return res
}
export const dispatchGetAllUsersForAdmin = (res) => {
    return {
        type: ACTIONS.GET_ALL_USER_FORAD,
        payload: res.data
    }
}

// export const fetchAllCart = async(token) => {
//     const res = await axios.get('/user/get_allcart', { headers: { Authorization: token } })
//     return res
// }
// export const dispatchGetAllCart = (res) => {
//     return {
//         type: ACTIONS.GET_ALL_CART,
//         payload: res.data
//     }
// }
