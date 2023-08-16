import { combineReducers } from "redux";
import auth from "./authReducer";
import adminReducer from "./adminReducer";
import token from "./tokenReducer";
import users from "./userReducer";
import agent from "./agentReducer";
import categoryVideo from "./categoryVideoReducer ";
import tutorials from "./tutorialReducer";
import courses from "./coursesReducer";
import registerCourses from "./registerReducer";
import discovery from "./discoveryReducer";
import dashboard from "./dashboardReducer";
import simReducer from "./simReducer";

export default combineReducers({
    auth,
    token,
    users,
    agent,
    tutorials,
    courses,
    registerCourses,
    discovery,
    dashboard,
    categoryVideo,
    simReducer, 
    adminReducer
});