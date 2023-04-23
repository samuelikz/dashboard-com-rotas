import {createTheme } from '@mui/material';


export const LightTheme = createTheme({
  palette:{
    primary:{
      main: '#F9FAFB',
      dark: '#F9FAFB',
      light: '#F9FAFB',
      contrastText: '#212B36',
    },
    secondary:{
      main: '#EDEFF2',
      dark: '#EDEFF2',
      light: '#EDEFF2',
      contrastText: '#212B36'
    },
    background:{
      default: '#FFFFFF',
      paper: '#EDEFF2',
    }
  }
});