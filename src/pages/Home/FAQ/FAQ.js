import { Box } from '@mui/material';
import React from 'react';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import CanvasAccordion from './../../../components/CanvasAccordion/CanvasAccordion';

const FAQ = () => {
    return (
        <Box sx={{
            mb: 8
        }}>
            <SectionTitle title='Frequently Asked' colored='Questions'></SectionTitle>
            <Box sx={{
                mt: 1
            }}>
                <CanvasAccordion></CanvasAccordion>
            </Box>
        </Box>
    );
};

export default FAQ;