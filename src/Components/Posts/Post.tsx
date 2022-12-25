import React, {useEffect, useState} from 'react'
import {Box, Button, Paper, Typography} from "@mui/material";
import {postsStore} from "../../Store/posts.store";
import {useParams} from "react-router";
import {IComment} from "../../models";
import {observer} from "mobx-react";
import CommentList from "../Comments/CommentList";
import {getCommentsByPostId} from "../../Api/api";

type Props = {}

const Post = (props: Props) => {
    const params = useParams()
    const {posts, getPost, getPostById, post} = postsStore
    const [comments, setComments] = useState<IComment[]>([])
    const [isLoading, setIsLoading] = useState<Boolean>(false)

    const handleLoadComment = (async ()=>{
        setIsLoading(true)
        if(params.postId !== undefined) {
            const response = await getCommentsByPostId(params.postId)
            if (response === null) alert("Server error")
            else setComments(response)
        }
        setIsLoading(false)
    })

    useEffect(() => {
        if(params.postId !== undefined){
            console.log(posts.length)
            if(posts.length != 0) getPost(+params.postId)
            else getPostById(params.postId).then()
        }
    }, [])
    return (
        <div>
            {post?
                <Box>
                    <Paper elevation={2} sx={{p: 6}}>
                        <Typography variant="h3" component="h2">
                            {post.title}
                        </Typography>
                        <Typography variant="subtitle1" component="h2">
                            Автор: {}
                        </Typography>
                        <Typography mt={4} variant="body1">
                            {post.body}
                        </Typography>
                        <Button sx={{mt: "40px"}}
                                variant="contained"
                                onClick={handleLoadComment}
                        >Загрузить комметарии</Button>
                    </Paper>

                    <CommentList comments={comments} isLoading={isLoading} />
                </Box>:
                <div>Loading...</div>
            }
        </div>
    )
}
export default observer(Post)