import { Box } from '@mui/material';
import React from 'react';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';


const serviceImages = [
    'https://i.ibb.co/HNhykGp/iphone-1.png',
    'https://i.ibb.co/r0gHkvM/color-palette-1.png',
    'https://i.ibb.co/CvQwzKC/coding-1.png',
];

const Services = () => {
    return (
        <Box>
            <SectionTitle title="We Provide" colored="Amazing Services"></SectionTitle>
        </Box>
    );
};

export default Services;