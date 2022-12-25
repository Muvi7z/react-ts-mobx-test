import { Divider, ListItem, ListItemText, Typography} from "@mui/material";
import React from "react";
import {IComment} from "../../models";

interface Props {
    comment: IComment
}

const Comment = ({comment}: Props) => {
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