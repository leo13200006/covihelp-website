import {sleep} from "./LoginControllers";
import {tickets} from "../covihelp-dummy-data/Tickets";


export const createTicket = async (ticketObj) => {
    console.log("Create Ticket: " + ticketObj.toString())
    await sleep(1000)
    return "yey"
}

export const updateTicket = async (ticketObj) => {
    console.log("Update Ticket: " + ticketObj.toString())
    await sleep(1000)
    return "yey"
}

export const getAllTicket = async () => {
    await sleep(1000)
    return tickets
}
