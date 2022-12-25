import {IUser} from "../../models";
import {Box, Divider, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

interface UserProps {
    user: IUser
}

const User = ({user}: UserProps) => {
    const history = useNavigate()

    const handleClickItem = () => {

    }
    return (
        <>
            <Link style={{textDecoration: "none", color:'black'}} to={`${user.id}`}>
                <ListItemButton onClick={() => console.log(user)}>
                    <ListItemText primary={user.name} secondary={user.email} />
                </ListItemButton>
            </Link>
            <Divider/>
        </>

)
}

export default User;