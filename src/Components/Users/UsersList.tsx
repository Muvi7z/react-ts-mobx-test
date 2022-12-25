import User from "./User";
import {useEffect, useState} from "react";
import {usersStore} from "../../Store/users.store";
import {observer} from "mobx-react";
import {Box, List, Pagination, Typography} from "@mui/material";
import React from "react";




const UsersList = () => {
    // const [users, setUsers] = useState<IUser[]>([])
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState('')
    const {isLoading, users, getUsers,totalCount} = usersStore
    const [page, setPage] = useState(1)

    const handleChangePage = (selPage: number) => {
        setPage(selPage)
        getUsers(selPage).then()
    }

    useEffect(() => {

        getUsers(page).then()
    },[])
    return (
        <Box>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>Пользователи</Typography>
            {
                isLoading?<p>Loading...</p>:
                <Box sx={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent:"center"}}>
                    <List sx={{width: '1', bgcolor: 'background.paper'}}>
                        {users.map(user => (
                            <User key={user.id} user={user} />
                        ))}
                    </List>
                    {(+totalCount)>1 &&
                    <Pagination page={page} onChange={(event,page) => handleChangePage(page)} shape="rounded" count={+totalCount} />}
                </Box>
            }
        </Box>
    )
}

export default observer(UsersList);