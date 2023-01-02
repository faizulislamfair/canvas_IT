import { Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../Header/Header';

const Layout = () => {
    return (
        <Box>
            <Container>
                <Header></Header>
                <Outlet></Outlet>
            </Container>
        </Box>
    );
};

export default Layout;