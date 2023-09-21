import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import "../styles/Sidebar.css"


import {
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    List,
    ListItemText,
    ListItemButton,
    Box,

}

from "@mui/material"

export const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const links = [
        {name : '홈', path: '/', pathname: ''},
        { name: '안전 지침', path: '/info', pathname: 'info' },
        { name: '실시간 재난 정보', path: '/realtime', pathname: 'realtime' },
        { name: '대피 시설 정보 ', path: '/location', pathname: 'location' },
    ]

    const [active, setActive] = useState<String>('');
    const [activeIndex, setActiveIndex] = useState<number>(0);
    useEffect(() => {
        let path = location.pathname;
        path = path.split('/')[1];
        setActive(path);
        for (let i = 0; i < links.length; i++) {
            if (links[i].pathname === path) {
                setActiveIndex(i);
                break;
            }
        }
    }, [location.pathname])





    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100%)`,
                    ml: `240px`,
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}

            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        CMD
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
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
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {links.map((link, index) => {
                            return (
                                <ListItemButton
                                    key={index}
                                    onClick={() => navigate(link.path)}
                                    selected={active === link.pathname}
                                >
                                    <ListItemText primary={link.name}  />
                                </ListItemButton>
                            )
                        })}
                    </List>
                </Box>
            </Drawer>
        </Box>
        
    )
}