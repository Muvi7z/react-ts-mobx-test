import {makeAutoObservable} from "mobx";
import {IUser} from "../models";
import {fetchUsers} from "../Api/userApi";

class UsersStore{
    constructor() {
        makeAutoObservable(this)
    }

    isLoading = false
    users: IUser[] = []

    getUsers = async () => {
        try {
            this.isLoading =true
            const response = await fetchUsers()
            if( response === null) return alert("Server error")
            this.users = response
        }
        catch (e){
        }
        finally {
            this.isLoading = false
        }
    }
}

export const usersStore = new UsersStore()