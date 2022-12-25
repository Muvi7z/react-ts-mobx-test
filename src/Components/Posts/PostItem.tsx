import { Divider, ListItemButton, Typography} from "@mui/material";
import {useNavigate} from "react-router";
import {IPost} from "../../models";

interface Props {
    post: IPost
}

const PostItem = ({post}: Props) => {
    const history = useNavigate()
    const routePost = () => {history(`/posts/${post.id}`)}
    return (
        <>
            <ListItemButton
                onClick={routePost}
                sx={{
                    flexDirection: "column"
                }}
            >
                <Typography variant="h6" gutterBottom>
                    {post.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {post.body}
                </Typography>
            </ListItemButton>
            <Divider/>
        </>

    )
}

export default PostItem;