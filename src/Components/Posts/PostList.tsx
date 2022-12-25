import React, {useEffect, useState} from 'react'
import {useParams} from "react-router";
import {usersStore} from "../../Store/users.store";
import {postsStore} from "../../Store/posts.store";
import {Box, List, Pagination, Typography} from "@mui/material";
import {observer} from "mobx-react";
import {IUser} from "../../models";
import PostItem from "./PostItem";

interface Props {}

const PostList = observer(({}: Props) => {
    const {isLoading, posts, getPosts, totalCount} = postsStore
    const {getUser} = usersStore
    const [user, setUser] = useState<IUser>()
    const [page, setPage] = useState(1)

    const params = useParams()

    const handleChangePage = (selPage: number) => {
        setPage(selPage)
        getPosts(params.userId, selPage)
    }

    useEffect(() => {
        getPosts(params.userId, page).then(r => {
            setUser(getUser(posts[0]?.id))
        })
    },[])

    return (
        <Box>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>Посты пользователя {user?.name}</Typography>
            {
                isLoading?
                <p>Loading...</p>:
                    <Box sx={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent:"center"}}>
                        <List sx={{width: '1', bgcolor: 'background.paper'}}>
                            {posts.map(post => (
                                <PostItem key={post.id} post={post} />
                            ))}
                        </List>
                        {(+totalCount)>0 &&
                            <Pagination page={page} onChange={(event,page) => handleChangePage(page)} shape="rounded" count={+totalCount} />}
                    </Box>
            }
        </Box>
    )
})

export default (PostList);