import axios, {AxiosError, AxiosResponse} from "axios";
import {IComment, IPost, IUser} from "../models";

const url = "https://gorest.co.in"

type AsyncUsers = Promise<AxiosResponse | null>
const AsyncUsers = Promise;

type AsyncPosts = Promise<IPost[] | null>
const AsyncPosts = Promise;

type AsyncPost = Promise<IPost | null>
const AsyncPost = Promise;

type AsyncComment = Promise<IComment[] | null>
const AsyncComment = Promise;

export async function fetchUsers(): AsyncUsers {
    try {
        const response = await axios.get<IUser[]>(url+"/public/v2/users")
        return (response)
    }
    catch (e){
        const error = e as AxiosError
        console.log("fetchUsers", error)
        return null
    }
}
export async function getPostsByUserId(userId: string): AsyncPosts {
    try {
        const response = await axios.get<IPost[]>(url+`/public/v2/users/${userId}/posts`)
        return (response.data)
    }
    catch (e){
        const error = e as AxiosError
        console.log("getPostsByUserId", error)
        return null
    }
}
export async function getPostById(id: string): AsyncPost {
    try {
        const response = await axios.get<IPost>(url+`/public/v2/posts/${id}`)
        return (response.data)
    }
    catch (e){
        const error = e as AxiosError
        console.log("getPostsByUserId", error)
        return null
    }
}
export async function getCommentsByPostId(postId: string): AsyncComment {
    try {
        const response = await axios.get<IComment[]>(url+`/public/v2/posts/${postId}/comments`)
        return (response.data)
    }
    catch (e){
        const error = e as AxiosError
        console.log("getCommentsByPostId", error)
        return null
    }
}