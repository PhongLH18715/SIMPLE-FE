import ACTIONS from "./index";
import axios from "axios";

export const fetchDashBoardTrainer = async(token) => {
    const res = await axios.get("/trainer/dashboard", {
        headers: { authorization: token },
    });
    return res;
};
export const fetchDashBoardAdmin = async(token) => {
    const res = await axios.get("/admin/dashboard", {
        headers: { authorization: token },
    });
    return res;
};

export const dispatchDashBoardTrainer = (res) => {
    return {
        type: ACTIONS.GET_DASHBOARD_TRAINER,
        payload: res.data,
    };
};
export const dispatchDashBoardAdmin = (res) => {
    return {
        type: ACTIONS.GET_DASHBOARD_ADMIN,
        payload: res.data,
    };
};