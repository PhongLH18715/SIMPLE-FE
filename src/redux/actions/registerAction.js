import ACTIONS from './index'
import axios from 'axios'

export const fetchCheckRegister = async(token) => {
    const res = await axios.get('/user/check_register', { headers: { authorization: token } })
    return res
}
export const dispatchCheckRegister = (res) => {
    return {
        type: ACTIONS.GET_CHECK_REGISTER,
        payload: res.data
    }
}