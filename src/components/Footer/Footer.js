import { Box, Container, Typography, Button, Divider } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{
            bgcolor: 'primary.main',
            mt: 8,
            py: 8
        }}>
            <Container>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Typography sx={{
                        fontSize: '1.5rem',
                        color: '#fff',
                        flex: 1
                    }}>
                        Canvas IT
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Typography sx={{
                            fontSize: '1.5rem',
                            color: 'rgba(255, 255, 255, 0.5)'
                        }}>
                            Canvas IT
                        </Typography>
                        <Button sx={{
                            bgcolor: 'primary.green',
                            '&:hover': {
                                bgcolor: 'primary.main'
                            },
                            ml: 2,
                        }}>Get Started</Button>

                    </Box>
                </Box>
                <Divider sx={{
                    mt: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.5)'
                }}></Divider>
            </Container >
        </Box >
    );
};

export default Footer;