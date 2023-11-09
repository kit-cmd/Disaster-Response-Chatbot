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
    IconButton,
}
    from "@mui/material"

import MenuIcon from '@mui/icons-material/Menu';

export const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const links = [
        {name : '홈', path: '/', pathname: ''},
        { name: '안전 지침', path: '/info', pathname: 'info' },
        { name: '실시간 재난 정보', path: '/realtime', pathname: 'realtime' },
        { name: '대피 시설 정보 ', path: '/location', pathname: 'location' },
        { name: '재난 관련 최신 정보', path: '/news', pathname: 'news'}
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

    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const drawer = (
        <>
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
            <List>
                {links.map((link, index) => {
                    return (
                        <ListItemButton
                            key={index}
                            onClick={() => {
                                navigate(link.path)
                                handleDrawerToggle()
                            }}
                            selected={active === link.pathname}
                        >
                            <ListItemText primary={link.name} />
                        </ListItemButton>
                    )
                })}
                </List>
            </Box>
        </>
    );


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
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        CMD
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
            >   
                {drawer}
            </Drawer>
            <Drawer
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                open
            >
                {drawer}
            </Drawer>
        </Box>
        
    )
}