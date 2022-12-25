import {IUser} from "../../models";
import {Divider, ListItemButton, ListItemText} from "@mui/material";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

interface UserProps {
    user: IUser
}

const User = ({user}: UserProps) => {
    return (
        <>
            <Link style={{textDecoration: "none", color:'black'}} to={`${user.id}`}>
                <ListItemButton>
                    <ListItemText primary={user.name} secondary={user.email} />
                </ListItemButton>
            </Link>
            <Divider/>
        </>
)
}

export default User;