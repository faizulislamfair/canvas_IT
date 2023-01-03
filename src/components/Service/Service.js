import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Service = ({ service }) => {

    const { image, title, description } = service;

    return (
        <Card sx={{
            maxWidth: 345,
            boxShadow: 'none',
            pt: 2,
            mx: 'auto',
            '&:hover': {
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)'
            }
        }}>
            <CardMedia
                component='img'
                sx={{ height: 140, width: 'auto', mx: 'auto' }}
                image={image}
            />
            <CardContent sx={{
                textAlign: 'center'
            }}>
                <Typography gutterBottom variant="h5" component="div" sx={{
                    fontWeight: 'bold'
                }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Service;