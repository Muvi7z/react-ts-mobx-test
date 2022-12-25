import MainPage from "./Components/MainPage";
import UsersList from "./Components/Users/UsersList";
import React from "react";
import PostList from "./Components/Posts/PostList";
import Post from "./Components/Posts/Post";
interface Route {
    path: string,
    component: React.ReactNode
}

export const ROUTES: Array<Route> = [
    {
        path: "/",
        component: <MainPage />
    },
    {
        path: "/users",
        component: <UsersList />
    },
    {
        path: "/users/:userId",
        component: <PostList />
    },
    {
        path: "/posts/:postId",
        component: <Post />
    },
]