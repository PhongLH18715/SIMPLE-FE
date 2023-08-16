import ACTIONS from "./index";
import axios from "axios";
export const dispatchLoginUser = () => {
    return {
        type: ACTIONS.LOGIN_USER,
    };
};

export const dispatchLoginAdmin = () => {
    return {
        type: ACTIONS.LOGIN_ADMIN,
    };
};
export const dispatchLoginAgent = () => {
    return {
        type: ACTIONS.LOGIN_AGENT,
    };
};
export const dispatchLoginShipper = () => {
    return {
        type: ACTIONS.LOGIN_SHIPPER,
    };
};

export const fetchUser = async(token) => {
    const res = await axios.get("/user/infor", {
        headers: { Authorization: token },
    });
    return res;
};
export const dispatchGetUser = (res) => {
    return {
        type: ACTIONS.GET_USER,
        payload: {
            user: res.data,
            isAdmin: res.data.role === 1 ? true : false,
            isUser: res.data.role === 0 ? true : false,
        },
    };
};


// export const fetchAdmin = async(token) => {
//     const res = await axios.get("/admin/infor", {
//         headers: { Authorization: token },
//     });
//     return res;
// };
export const dispatchGetAdmin = (res) => {
    return {
        type: ACTIONS.GET_ADMIN,
        payload: {
            admin: res.data.user,
        },
    };
};


// export const fetchAdminHistoryPrice = async() => {
//     const res = await axios.get("/api/payment/getAllHistory");
//     return res;
// };

// export const dispatchGetHitoryPrice = (res) => {
//     return {
//         type: ACTIONS.GET_ADMIN_HISTORY,
//         payload: res.data
//     };
// };

// export const fetchAdminGetCateSkill = async(token) => {
//     const res = await axios.get("/admin/getAllCateSkill", {
//         headers: { Authorization: token },
//     });
//     return res;
// };
// export const dispatchGetAdminCateSkill = (res) => {
//     return {
//         type: ACTIONS.GET_ALL_CATE_SKILL,
//         payload: res.data,
//     };
// };
