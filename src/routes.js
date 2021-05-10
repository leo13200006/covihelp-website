import Dashboard from "covihelp-views/user/Dashboard.js";
import Login from "covihelp-views/auth/Login.js";
import Profile from "covihelp-views/user/Profile.js";
import Register from "covihelp-views/auth/Register.js";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Person from "@material-ui/icons/Person";
import Tv from "@material-ui/icons/Tv";
import VpnKey from "@material-ui/icons/VpnKey";
import Otp from "./covihelp-views/auth/Otp";
import {AddCircle} from "@material-ui/icons";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: Tv,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: Person,
    iconColor: "WarningLight",
    component: Profile,
    layout: "/admin",
  },
  {
    // create new path
    path: "/user-profile",
    name: "Want Help?",
    icon: AddCircle,
    iconColor: "Info",
    // change this component and add you component of form just center that form it will look good
    component: Profile,
    // layout should be same don't change this
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: VpnKey,
    iconColor: "Info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: AccountCircle,
    iconColor: "ErrorLight",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/otp",
    name: "Otp",
    icon: AccountCircle,
    iconColor: "ErrorLight",
    component: Otp,
    layout: "/auth",
  },
  {
    divider: true,
  },
];
export default routes;
