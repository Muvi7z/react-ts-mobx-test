import {makeAutoObservable} from "mobx";
import {IUser} from "../models";
import {fetchUsers, getUserById} from "../Api/api";

class UsersStore{
    constructor() {
        makeAutoObservable(this)
    }

    isLoading = false
    users: IUser[] = []
    user: IUser = {id:0, name:'',gender:'',email:'',status:''} //TODO
    totalCount: string = '' //TODO

    getUsers = async (page:number) => {
        try {
            this.isLoading =true
            const response = await fetchUsers(page)
            if( response === null) return alert("Server error")
            this.users = response.data
            if(response.headers['x-pagination-pages'])
                this.totalCount = response.headers['x-pagination-pages']
        }
        catch (e){
        }
        finally {
            this.isLoading = false
        }
    }
    getUser(id: number) {
        this.user= this.users?.filter((user) => {
            console.log(user.id)
            console.log(id)
            return user.id===id
        })[0]
    }
    getUserById = async (userId: string) =>{ //TODO
        try {
            this.isLoading =true

            if(userId !== undefined) {
                const response = await getUserById(userId)
                if (response === null) return alert("Server error 404")
                this.user = response
            }
        }
        catch (e){
        }
        finally {
            this.isLoading = false
        }
    }
}

export const usersStore = new UsersStore()