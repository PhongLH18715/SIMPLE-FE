import axios from "axios";
import ACTIONS from "./index";

export const fetchUserListDiscovery = async(token) => {
    const res = await axios.get("/user/add_likeDiscovery", {
        headers: { authorization: token },
    });
    return res;
};
export const fetchDiscovery = async(token) => {
    const res = await axios.get("/user/list_discovery", {
        headers: { authorization: token },
    });
    return res;
};

export const dispatchUserListDiscovery = (res) => {
    return {
        type: ACTIONS.GET_USER_LIKE_DISCOVERY,
        payload: res.data,
    };
};
export const dispatchDiscovery = (res) => {
    return {
        type: ACTIONS.GET_DISCOVERY_USER,
        payload: res.data,
    };
};