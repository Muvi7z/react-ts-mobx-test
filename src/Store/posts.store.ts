import {makeAutoObservable} from "mobx";
import {IPost} from "../models";
import { getPostById, getPostsByUserId} from "../Api/api";

class PostsStore{
    constructor() {
        makeAutoObservable(this)
    }
    isLoading = false
    posts: IPost[] = []
    post: IPost = {id:0, body: '', title: '', userId: 0} //TODO
    totalCount: string = '' //TODO

    getPosts = async (postId: string | undefined, page: number) => {
        try {
            this.isLoading =true

            if(postId !== undefined) {
                const response = await getPostsByUserId(postId, page)
                if (response === null) return alert("Server error")
                this.posts = response.data
                if(response.headers['x-pagination-pages'])
                    this.totalCount = response.headers['x-pagination-pages']
            }
        }
        catch (e){
        }
        finally {
            this.isLoading = false
        }
    }
    getPostById = async (postId: string) =>{ //TODO
        try {
            this.isLoading =true

            if(postId !== undefined) {
                const response = await getPostById(postId)
                if (response === null) return alert("Server error 404")
                this.post = response
            }
        }
        catch (e){
        }
        finally {
            this.isLoading = false
        }
    }
    getPost = (postId: number) => {
        this.post = this.posts?.filter((post) => {
            console.log(post.id)
            console.log(postId)
            return post.id === postId
        })[0] //TODO
    }
}

export const postsStore = new PostsStore()