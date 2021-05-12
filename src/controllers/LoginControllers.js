import {jwtToken} from "../covihelp-dummy-data/DummyLogin";

export const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export const checkUserIsSigned = async () => {
    await sleep(1000)
    return false
}

export const doSignup = async (signupObj) => {
    console.log("Login Obj " + signupObj)
    await sleep(1000)
    return "1111"
}

export const doLogin = async (loginObj) => {
    console.log("Login Obj " + loginObj)
    await sleep(1000)
    return "1111"
}

export const doCheckOtp = async (otpObj) => {
    console.log("Login Obj " + otpObj.toString())
    await sleep(1000)
    return jwtToken;
}
