import React, {useEffect, useState} from 'react'
import {useParams} from "react-router";
import {usersStore} from "../../Store/users.store";
import {postsStore} from "../../Store/posts.store";
import {Box, List, Typography} from "@mui/material";
import User from "../Users/User";
import usersList from "../Users/UsersList";
import {observer} from "mobx-react";
import {set} from "mobx";
import {IUser} from "../../models";
import PostItem from "./PostItem";

interface Props {}

const PostList = observer(({}: Props) => {
    const {isLoading, posts, getPosts} = postsStore
    const {getUser, users} = usersStore
    const [user, setUser] = useState<IUser>()
    const params = useParams()

    useEffect(() => {
        getPosts(params.userId).then(r => {
            setUser(getUser(posts[0]?.id))
        })
    },[])

    return (
        <Box>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>Посты пользователя {user?.name}</Typography>
            {
                isLoading?

                <p>Loading...</p>:
                <List sx={{width: '1', bgcolor: 'background.paper'}}>
                    {posts.map(post => (
                        <PostItem key={post.id} post={post} />
                    ))}
                </List>
            }
        </Box>
    )
})

export default (PostList);