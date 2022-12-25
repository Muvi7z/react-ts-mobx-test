import User from "./User";
import {useEffect, useState} from "react";
import {usersStore} from "../../Store/users.store";
import {observer} from "mobx-react";
import {Box, Container, Divider, List, Toolbar, Typography} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router";
import {pageStore} from "../../Store/page.store";




const UsersList = () => {
    // const [users, setUsers] = useState<IUser[]>([])
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState('')
    const {isLoading, users, getUsers} = usersStore
    const {totalCount,setTotalCount} = pageStore
    const [page, setPage] = useState()

    useEffect(() => {
        getUsers()
    },[])
    return (
        <Box>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>Пользователи</Typography>
            {
                isLoading?<p>Loading...</p>:
                <List sx={{width: '1', bgcolor: 'background.paper'}}>
                    {users.map(user => (
                        <User key={user.id} user={user} />
                    ))}
                </List>
            }
        </Box>
    )
}

export default observer(UsersList);