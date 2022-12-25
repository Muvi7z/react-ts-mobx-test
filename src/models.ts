import React from "react";

export interface IUser {
    readonly id: number,
    name: string,
    email: string,
    gender: string,
    status: string
}

export interface IMenu {
    path: string,
    text: string,
    icons: React.ReactNode
}

export interface IPost {
    readonly id: number,
    readonly userId: number,
    title: string,
    body: string,
}

export interface IComment {
    readonly id: number,
    readonly postId: number,
    name: string,
    email: string,
    body: string,
}