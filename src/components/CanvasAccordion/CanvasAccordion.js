import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const CanvasAccordion = () => {
    return (
        <Accordion sx={{
            boxShadow: 'none',
            border: `1px solid #E5EAF4`,
            p: 2,
            '& .MuiAccordionSummary-content': {
                color: 'primary.main'
            },
            '& .Mui-expanded': {
                '& p': {
                    color: 'primary.green'
                }
            }
        }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography sx={{
                    fontWeight: 'bold'
                }}>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{
                    color: '#5A7184'
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default CanvasAccordion;