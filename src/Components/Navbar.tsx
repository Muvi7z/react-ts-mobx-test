import {
    AppBar,
    CssBaseline,
    Divider,
    Drawer, Icon,
    List,
    ListItem,
    ListItemButton, ListItemIcon, ListItemText,
    Toolbar,
} from "@mui/material";
import React from "react";

interface Link {
    path: string,
    text: string,
    icons: React.ReactNode
}

const Navbar = () => {
    const links: Array<Link> = [
        {path: '/users', text: "Пользователи", icons: <Icon/>},
    ]

    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - 240px)`}}
            >
                <Toolbar>
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
                        <ListItem key={link.text} disablePadding>
                            <ListItemButton href={link.path}>
                                <ListItemIcon>
                                </ListItemIcon>
                                <ListItemText primary={link.text} />
                            </ListItemButton>

                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
        </>
    );
}

export default Navbar;