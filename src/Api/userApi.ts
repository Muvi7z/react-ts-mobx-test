import axios, {AxiosError} from "axios";
import {IUser} from "../models";

const url = "https://gorest.co.in"

type AsyncUsers = Promise<IUser[] | null>
const AsyncUsers = Promise;

export async function fetchUsers(): AsyncUsers {
    try {
        const response = await axios.get<IUser[]>(url+"/public/v2/users")
        return (response.data)
    }
    catch (e){
        const error = e as AxiosError
        console.log("fetchUsers", error)
        return null
    }
}