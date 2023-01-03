import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, IconButton, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


const CanvasCard = ({ image }) => {

    const theme = useTheme();

    return (
        <Card sx={{ maxWidth: 345, p: 2, borderRadius: '10px', pb: 0, minWidth: '345px' }}>
            <CardMedia
                component='img'
                sx={{ height: 180 }}
                image={image}
                title=""
                style={{
                    borderRadius: '10px'
                }}
            />
            <CardContent sx={{
                p: 0,
                pt: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Box>
                    <Typography gutterBottom variant="h5" component="div">
                        Project
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontSize={18} >
                        Project Research
                    </Typography>
                </Box>
                <IconButton sx={{
                    border: `2px solid ${theme.palette.primary.main}`,
                    '& svg': {
                        color: 'primary.main'
                    }
                }}>
                    <AddIcon></AddIcon>
                </IconButton>
            </CardContent>
        </Card>
    );
};

export default CanvasCard;