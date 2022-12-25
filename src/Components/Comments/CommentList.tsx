import React, {useEffect} from 'react'
import {Box, List, Paper, Typography} from "@mui/material";
import {observer} from "mobx-react";
import {IComment} from "../../models";
import Comment from "./Comment";

interface Props {
    comments: IComment[],
    isLoading: Boolean
}

const CommentList = observer(({comments, isLoading}: Props) => {

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