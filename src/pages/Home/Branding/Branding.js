import React from 'react';
import { Box, styled } from '@mui/material';


const BrandingWrapper = styled(Box)(({ theme }) => ({
    height: '70vh',
    backgroundColor: 'rgba(122, 178, 89, 0.15)',
    padding: theme.spacing(4),
    margin: '4rem 0',
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)'
}))


const Branding = () => {
    return (
        <BrandingWrapper>Branding</BrandingWrapper>
    );
};

export default Branding;