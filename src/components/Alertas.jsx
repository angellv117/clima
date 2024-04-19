import { Alert, AlertTitle, Box, Button, Collapse, Container, Snackbar, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'


export default function Alertas() {

    const [open, setOpen] = useState(true);

    const [openAlert, setOpenAlert] = useState(false);


    return (
        <>

            <Collapse in={open}>
                <Stack sx={{ p: 2, width: '50%' }} spacing={2} >
                    <Alert severity="error" onClose={() => { setOpen(false), setOpenAlert(true)}}>
                        <AlertTitle>Error</AlertTitle>
                        This is an error alert — <strong>check it out!</strong>
                    </Alert>
                    <Alert severity="warning">
                        <AlertTitle>Advertiencia</AlertTitle>
                        This is a warning alert — <strong>check it out!</strong>
                    </Alert>
                    <Alert severity="info">
                        <AlertTitle>informaciòn</AlertTitle>
                        This is an info alert — <strong>check it out!</strong>
                    </Alert>
                    <Alert severity="success">
                        <AlertTitle>Ok</AlertTitle>
                        This is a success alert — <strong>check it out!</strong>
                    </Alert>
                </Stack >
            </Collapse>
            <Box sx={{ p: 2, display: 'grid', gap: '2rem', width: '50%' }}>
                <Typography align='right'><Button variant='contained' onClick={() => { setOpen(true), setOpenAlert(false)}}>Aparecer</Button></Typography>




                <Alert variant='outlined' severity="error" >
                    <AlertTitle>Error</AlertTitle>
                    This is an error alert — <strong>check it out!</strong>
                </Alert>
                <Alert variant='outlined' severity="warning">
                    <AlertTitle>Advertiencia</AlertTitle>
                    This is a warning alert — <strong>check it out!</strong>
                </Alert>
                <Alert variant='filled' severity="info">
                    <AlertTitle>informaciòn</AlertTitle>
                    This is an info alert — <strong>check it out!</strong>
                </Alert>
                <Alert variant='filled' severity="success">
                    <AlertTitle>Ok</AlertTitle>
                    This is a success alert — <strong>check it out!</strong>
                </Alert>
            </Box >
            <Box sx={{ p: 2, display: 'grid', gap: '2rem', width: '70%', alignContent: 'center' }}>
                <Alert onClose={() => { }}>This is a success alert — check it out!</Alert>
                <Alert
                    action={
                        <>
                            <Button color="inherit" size="small"> Editar </Button>
                            <Button color="inherit" size="small"> Ver </Button>
                            <Button color="inherit" size="small"> Eliminar </Button>
                        </>
                    }
                >
                    This is a success alert — check it out!
                </Alert>

            </Box>
            <Box sx={{ p: 2, display: 'grid', gap: '2rem', width: '70%', alignContent: 'center' }}>
                <Snackbar open={openAlert} autoHideDuration={1000} onClose={() =>setOpenAlert(false)}>
                    <Alert variant='filled' severity="info">
                        <AlertTitle>informaciòn</AlertTitle>
                        Se han ocultado
                    </Alert>
                </Snackbar>
            </Box>

        </>
    )
}
