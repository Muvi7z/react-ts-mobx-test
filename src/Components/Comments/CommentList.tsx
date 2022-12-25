import React, {useEffect, useState} from 'react'
import {useParams} from "react-router";
import {usersStore} from "../../Store/users.store";
import {postsStore} from "../../Store/posts.store";
import {Box, List, Paper, Typography} from "@mui/material";
import User from "../Users/User";
import usersList from "../Users/UsersList";
import {observer} from "mobx-react";
import {set} from "mobx";
import {IComment, IUser} from "../../models";
import Comment from "./Comment";

interface Props {
    comments: IComment[],
    isLoading: Boolean
}

const CommentList = observer(({comments, isLoading}: Props) => {
    const params = useParams()

    useEffect(() => {
    })

    return (
        <Box>
            <Paper elevation={2} sx={{p: 4, mt: 4}}>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>Комментарии</Typography>

                {
                isLoading?
                    <p>Loading...</p>:
                        <List sx={{width: '1', bgcolor: 'background.paper'}}>
                        {comments.map(comment => (
                            <Comment key={comment.id} comment={comment} />
                        ))}
                        </List>
                }
            </Paper>
        </Box>
    )
})

export default (CommentList);