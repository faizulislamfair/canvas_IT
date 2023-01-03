import { Box } from '@mui/material';
import React from 'react';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import CanvasAccordion from './../../../components/CanvasAccordion/CanvasAccordion';


const AccordionContent = [
    {
        title: 'How many client have been served?',
        description: '100+ clients have been served & satisfied to heart\'s content till date!'
    },
    {
        title: 'How long does it take to develop an app?',
        description: 'Depends on features & stuffs of your respective product!'
    },
    {
        title: 'Is there any other services you provide?',
        description: 'No, sir, we provide only the mentioned three services at the moment!'
    }
]



const FAQ = () => {
    return (
        <Box>
            <SectionTitle title='Frequently Asked' colored='Questions'></SectionTitle>
            <Box sx={{
                mt: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2
            }}>
                {
                    AccordionContent.map(Content => <CanvasAccordion Content={Content} ></CanvasAccordion>)
                }
            </Box>
        </Box>
    );
};

export default FAQ;