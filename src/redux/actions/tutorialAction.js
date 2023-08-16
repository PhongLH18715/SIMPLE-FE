import ACTIONS from "./index";
import axios from "axios";

export const fetchAllTutorial = async() => {
    const res = await axios.get("/user/getAll_tutorial");
    return res;
};
export const fetchAllTutorialLogin = async(token) => {
    const res = await axios.get("/user/getAll_tutorial_Login", {
        headers: { authorization: token },
    });
    return res;
};
export const fetchAllTutorialTrainer = async(token) => {
    const res = await axios.get("/admin/getAll_tutorial", {
        headers: { authorization: token },
    });
    return res;
};


export const dispatchAllTutorial = (res) => {
    return {
        type: ACTIONS.GET_ALL_TUTORIAL,
        payload: res.data,
    };
};


export const fetchTutorialCouses = async(token, id) => {
    const res = await axios.get(`/trainer/getCourses_tutorial/${id}`, {
        headers: { authorization: token },
    });
    return res;
};
export const fetchTutorialUserLike = async(token) => {
    const res = await axios.get(`/user/list_like`, {
        headers: { authorization: token },
    });
    return res;
};
export const fetchTutorialUserRegisted = async(token) => {
    const res = await axios.get(`/user/list_courses_registed`, {
        headers: { authorization: token },
    });
    return res;
};
export const dispatchAllTutorialLogin = (res) => {
    return {
        type: ACTIONS.GET_ALL_TUTORIAL_LOGIN,
        payload: res.data,
    };
};
export const dispatchAllTutorialTrainer = (res) => {
    return {
        type: ACTIONS.GET_ALL_TUTORIAL_TRAINER,
        payload: res.data,
    };
};
export const dispatchTutorialCourses = (res) => {
    return {
        type: ACTIONS.GET_COURSES_TURORIAL,
        payload: res.data,
    };
};
export const dispatchTutorialUserLike = (res) => {
    return {
        type: ACTIONS.GET_LIST_USER_LIKE_TUTORIAL,
        payload: res.data,
    };
};
export const dispatchTutorialUserRegisted = (res) => {
    return {
        type: ACTIONS.GET_USER_REGISTED,
        payload: res.data,
    };
};


// ----------------------------------------------------------------------
// export const fetchAllTutoriAllAdmin = async(token)=>{
//     const res = await axios.get("/user/getAll_tutorial", {
//         headers: { authorization: token },
//     });
//     return res;
// }