import styled from '@emotion/styled'
import { Box, Button, Card, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

console.log(import.meta.env.VITE_API_KEY);


export default function App() {

    const Img = styled("img")({
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        display: 'block'
    });
    return (

        <div>
            <Grid container>
                <Grid item xs={4} bgcolor='darkblue' height='100vh'>
                    <Img src='/img/1.jpg'></Img>
                </Grid>
                <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    
                <Typography variant='h4' color="primary" >Consulte el clima aqui:</Typography>
                </Grid>
            </Grid>
        </div>

    )
}
