import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

export default function BlueCard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card sx={{m:2, transition: "0.2s", "&:hover": { transform: "scale(1.05)",}}}>
          <CardActionArea>
            <CardMedia component='img' image="https://via.placeholder.com/1000x200" height="200">
            </CardMedia>
            <CardContent>
              <Typography variant='h5'> Acer Predator </Typography>
              <Typography  sx={{mb:2}} variant='body2'>NH.QK3EK.006, 17.0" WQXGA 250Hz Mini-LED, Intel i9-13900HX, NVIDIA GeForce RTX 4090 16GB, 32GB DDR5 4800Mhz, 2TB PCI-E SSD, Windows 11 Home, 3 Year Warranty</Typography>
              <Typography  align='right'> $15,000 </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button sx={{mt:2}} variant='contained' color='primary'>Add</Button>  
            <Button sx={{mt:2}} variant='contained' color='error'>Remove</Button>  
          </CardActions>
        </Card>
      </Grid>
    </Grid>

  )
}
