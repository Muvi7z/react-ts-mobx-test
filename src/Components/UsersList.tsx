import User from "./User";
import {useEffect, useState} from "react";
import {usersStore} from "../Store/users.store";
import {observer} from "mobx-react";
import {Box, Container, Divider, List, Toolbar} from "@mui/material";
import React from "react";



const UsersList = () => {
    // const [users, setUsers] = useState<IUser[]>([])
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState('')
    const {isLoading, users, getUsers} = usersStore


    useEffect(() => {
        getUsers()
    },[])
    return (
        <React.Fragment>
            <Container
                maxWidth="lg"
                sx={{
                    mt: '90px',
                    border: '1px solid red'
                }}
            >
               <Toolbar>
                   <Box
                   >
                       {isLoading && <p>Loading...</p>}
                       <List sx={{ width: '100%', bgcolor: 'background.paper', border: '1px solid green' }}>
                           {users.map(user => (
                                   <User key={user.id} user={user} />

                           ))}
                       </List>

                   </Box>
               </Toolbar>
            </Container >
        </React.Fragment>
    )
}

export default observer(UsersList);