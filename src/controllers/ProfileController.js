import {sleep} from "./LoginControllers";

export const checkAlredyDataIsPresentOrNOt = async () => {
    await sleep(1000)
    return false
}

export const createProfile = async (profileData) => {
    console.log("Profile Data: " + profileData.toString())
    await sleep(1000)
    return true
}
