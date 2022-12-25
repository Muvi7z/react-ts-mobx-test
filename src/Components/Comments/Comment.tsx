import {Box, Divider, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {IComment, IPost} from "../../models";

interface Props {
    comment: IComment
}

const Comment = ({comment}: Props) => {
    const history = useNavigate()
    return (
        <>
            <ListItem
            >
                <ListItemText
                    primary={
                        <React.Fragment>
                            <b>{comment.name + " "}</b>
                            <Typography sx={{ display: 'inline' }}
                                component="span"
                                color="#2196f3"
                            >
                                {comment.email}
                            </Typography>
                        </React.Fragment>
                    }
                    secondary={comment.body}/>
            </ListItem>
            <Divider/>
        </>

    )
}

export default Comment;