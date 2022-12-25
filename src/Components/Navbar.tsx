import {
    AppBar, Button,
    CssBaseline,
    Divider,
    Drawer, Icon,
    List,
    ListItem,
    ListItemButton, ListItemIcon, ListItemText,
    Toolbar,
} from "@mui/material";
import React, {useState} from "react";
import {IMenu} from "../models";
import UserIcon from "./Icons/UserIcon";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

const Navbar = () => {
    const links: Array<IMenu> = [
        {path: '/users', text: "Пользователи", icons: <Icon/>},
    ]
    const [title, setTitle] = useState('')
    const history = useNavigate()
    const goBack = () => history(-1)

    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - 240px)`}}
            >
                <Toolbar>
                    <Button
                        onClick={goBack}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Назад
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    backgroundColor: '#20b2aa',
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    {links.map((link) => (
                        <Link key={link.text} style={{textDecoration: "none", color:'black'}} to={link.path} >
                            <ListItem  disablePadding>
                                <ListItemButton onClick={() => setTitle(link.text)}>
                                    <ListItemIcon >
                                        <UserIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={link.text} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
            </Drawer>
        </>
    );
}

export default Navbar;