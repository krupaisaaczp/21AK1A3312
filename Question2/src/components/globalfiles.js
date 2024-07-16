// src/components/GlobalStyles.js
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  '@global': {
    body: {
      backgroundColor: '#f0f0f0', // Set background color for the entire app
      fontFamily: 'Roboto, sans-serif', // Set default font family
    },
  },
});

const GlobalStyles = () => {
  useStyles();
  return null;
};

export default GlobalStyles;
