import {createTheme } from '@mui/material'


export const DarkTheme = createTheme({
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
            default: '#292929',
            paper: '#323436',
        }
    }
});