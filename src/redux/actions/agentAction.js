import ACTIONS from "./index";
import axios from "axios";

export const fetchAllAgent = async(token) => {
    const res = await axios.get("https://simpay-api.hpscamera.com/api/user/get-agents",  {headers: {'Authorization': 'Bearer ' + token}});

    console.log(res)
    return res;
};
export const fetchAllOrder = async(token) => {
    const res = await axios.get("https://simpay-api.hpscamera.com/api/order",  {headers: {'Authorization': 'Bearer ' + token}});
    console.log("res", res)
    return res;
};
export const dispatchAllOrder = (res) => {
    return {
        type: ACTIONS.GET_ALL_ORDER,
        payload: res.data.data.list,
    };
};


export const dispatchAllAgent = (res) => {
    return {
        type: ACTIONS.GET_ALL_UGENT,
        payload: res.data.results,
    };
};
export const fetchAllShipper = async(token) =>{
    const res = await axios.get('https://simpay-api.hpscamera.com/api/user/get-shippers', {headers: {'Authorization': 'Bearer ' + token}})
    return res
}
export const dispatchAllShipper = (res) => {
    return {
        type: ACTIONS.GET_ALL_SHIPPER,
        payload: res.data.results,
    };
}