import {IUser} from "../models";
import {Divider, ListItem, ListItemText} from "@mui/material";

interface UserProps {
    user: IUser
}

const User = ({user}: UserProps) => {
    return (
        <>
            <ListItem sx={{border: '1px solid blue'}}>
                <ListItemText sx={{width:"100%", border: '1px solid black'}} primary={user.name} secondary={user.email} />
            </ListItem>
        </>

)
}

export default User;