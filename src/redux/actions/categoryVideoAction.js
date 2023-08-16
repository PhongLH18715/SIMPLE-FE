import ACTIONS from "./index";
import axios from "axios";

export const fetchAllCategoryVideo = async() => {
    const res = await axios.get("/user/getALl_cateVideo");
    return res;
};
// export const fetchAllCategoryVideoAdmin = async(token) => {
//     const res = await axios.get("/admin/get_allCate", {
//         headers: { authorization: token },
//     });
//     return res;
// };
export const fetchAllCategoryVideoforAd = async(token) => {
    const res = await axios.get("/admin/getAllCatevideo", {
        headers: { authorization: token },
    });
    return res;
};
export const dispatchAllCategoryVideo = (res) => {
    return {
        type: ACTIONS.GET_ALL_CATE_VIDEO,
        payload: res.data,
    };
};
// export const dispatchAllCategoryVideoAdmin = (res) => {
//     return {
//         type: ACTIONS.GET_ALL_CATE_VIDEO_ADMIN,
//         payload: res.data,
//     };
// };
export const dispatchAllCategoryVideoAdmin = (res) => {
    return {
        type: ACTIONS.GET_ALL_CATE_VIDEO_ADMIN,
        payload: res.data,
    };
};