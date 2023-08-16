import ACTIONS from "./index";
import axios from "axios";

export const fetchAllLocality = async(token) =>{
    const res = await axios.get('https://simpay-api.hpscamera.com/api/locality', {headers: {'Authorization': 'Bearer ' + token}})
    return res
}
export const dispatchAllLocality = (res) => {
    return {
        type: ACTIONS.GET_ALL_LOCALITY,
        payload: res.data.data.list,
    };
}