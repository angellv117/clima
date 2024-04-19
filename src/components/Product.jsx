import styled from '@emotion/styled'
import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'

export default function Product() {

    const Img = styled("img")({
        width: 200,
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
    })
    return (

        <div>
            <Paper sx={{ display: 'flex', bgcolor: '#EEE2DF', alignItems: 'center', gap: 2, overflow: 'hidden', m: 2, pl: 1, }}>
                <Img src='/public/img/1.jpeg' />
                <Box>
                    <Typography sx={{ mb: 2 }} variant='h5' align='left'>Acer Predator </Typography>
                    <Typography sx={{ mb: 2 }} variant='body2'>NH.QK3EK.006, 17.0" WQXGA 250Hz Mini-LED, Intel i9-13900HX, NVIDIA GeForce RTX 4090 16GB, 32GB DDR5 4800Mhz, 2TB PCI-E SSD, Windows 11 Home, 3 Year Warranty</Typography>
                    <Button sx={{ mb: 2 }} variant='contained'>Add item</Button>
                </Box>
                <Box sx={{ mr: 2 }} component="P">
                    $1,500.00
                </Box>
            </Paper>


        </div>

    )
}
