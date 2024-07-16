// src/theme.js
import { createTheme } from '@mui/material/styles';

// Define a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Change this to your primary color
    },
    secondary: {
      main: '#f50057', // Change this to your secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Set default font family
  },
});

export default theme;
