import {makeAutoObservable} from "mobx";

class PageStore {
    constructor() {
        makeAutoObservable(this)
    }
    totalCount: string = ''
    setTotalCount (count: string) {
        this.totalCount = count
    }
}

export const pageStore = new PageStore()