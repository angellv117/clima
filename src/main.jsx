import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App.jsx'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { SnackbarProvider } from 'notistack';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#716262',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={2} autoHideDuration={4000}>
        <CssBaseline />
        <App />

      </SnackbarProvider>

    </ThemeProvider>


  </React.StrictMode>,
)
