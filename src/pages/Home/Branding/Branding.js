import React from 'react';
import { Box, Button, Stack, styled, Typography } from '@mui/material';


const BrandingWrapper = styled(Box)(({ theme }) => ({
    height: '70vh',
    backgroundColor: 'rgba(122, 178, 89, 0.15)',
    padding: theme.spacing(4),
    margin: '4rem 0',
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))


const Branding = () => {
    return (
        <BrandingWrapper>
            <Stack spacing={5}>
                <Typography sx={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    lineHeight: '1.2'
                }}>
                    Take Your Brand To <br /> The Top of Realm
                </Typography>
                <Typography>
                    It doesn't get finer than this! Please have faith in our products!
                </Typography>
                <Button sx={{
                    width: '50%'
                }}>Hire Us</Button>
            </Stack>
            <Box sx={{
                width: '50%',
                //display: ['none', 'none', 'block'],
                display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'block'
                }
            }}>
                <img src="./canvas.svg" alt="Banner_Image" style={{ width: '100%' }} />
            </Box>
        </BrandingWrapper>
    );
};

export default Branding;