import {makeAutoObservable} from "mobx";
import {IUser} from "../models";
import {fetchUsers} from "../Api/api";

class UsersStore{
    constructor() {
        makeAutoObservable(this)
    }

    isLoading = false
    users: IUser[] = []
    totalCount: string = ''

    getUsers = async () => {
        try {
            this.isLoading =true
            const response = await fetchUsers()
            if( response === null) return alert("Server error")
            this.users = response.data
            if(response.headers['x-pagination-pages'])
                this.totalCount = response.headers['x-pagination-pages']
            console.log("Кол-во страниц", this.totalCount)
        }
        catch (e){
        }
        finally {
            this.isLoading = false
        }
    }
    getUser(id: number) {
        console.log("Ищем пользователя",this.users)
        return this.users?.filter((user) => {
            console.log(user.id)
            console.log(id)
            return user.id===id
        })[0]
    }
}

export const usersStore = new UsersStore()