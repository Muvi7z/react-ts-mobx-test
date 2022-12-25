import React, {useEffect, useState} from 'react'
import {useParams} from "react-router";
import {usersStore} from "../../Store/users.store";
import {postsStore} from "../../Store/posts.store";
import {Box, List, Pagination, Typography} from "@mui/material";
import {observer} from "mobx-react";
import PostItem from "./PostItem";

interface Props {}

const PostList = observer(({}: Props) => {
    const {isLoading, posts, getPosts, totalCount} = postsStore
    const {getUser, getUserById, user} = usersStore
    const [page, setPage] = useState(1)

    const params = useParams()

    const handleChangePage = (selPage: number) => {
        setPage(selPage)
        getPosts(params.userId, selPage).then()
    }

    useEffect(() => {
        if(params.userId !== undefined) {
            getPosts(params.userId, page).then()
            // if(posts.length != 0) (getUser(posts[0]?.userId))
            // else getUserById(params.userId).then()
        }
    },[])

    return (
        <Box>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>Посты пользователя</Typography>
            {
                isLoading?
                <p>Loading...</p>:
                    <Box sx={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent:"center"}}>
                        {posts.length!=0 ? <List sx={{width: '1', bgcolor: 'background.paper'}}>
                            {posts?.map(post => (
                                <PostItem key={post.id} post={post}/>
                            ))}
                        </List>:<Typography component="h2" variant="body1" gutterBottom>Посты не найдены</Typography>
                        }
                        {(+totalCount)>0 &&
                            <Pagination page={page} onChange={(event,page) => handleChangePage(page)} shape="rounded" count={+totalCount} />}
                    </Box>
            }
        </Box>
    )
})

export default (PostList);