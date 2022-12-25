import React from 'react'
import user from './user.svg'
import {Box} from "@mui/material";
interface Props {}

const UserIcon = (props: Props) => {
  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent:"center"}}>
        <img width="30px" src={user} alt="user" />
    </Box>
  )
}

export default UserIcon
