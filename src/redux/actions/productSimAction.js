import ACTIONS from "./index";
import axios from "axios";

export const fetchAllSim = async(token) => {
    const res = await axios.get("/api/product",  {headers: {'Authorization': 'Bearer ' + token}});
    return res;
};
export const dispatchAllSim = (res) => {
    return {
        type: ACTIONS.GET_ALL_SIM,
        payload: res.data.results,
    };
};
