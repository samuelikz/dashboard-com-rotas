import { Box, Divider, Icon, IconButton, Theme, Typography, useMediaQuery, useTheme, useThemeProps } from '@mui/material';
import { useDrawerContext } from '../contexts';
import { ReactNode } from 'react';

interface LayoutBaseProps {
  children?: React.ReactNode;
  titulo: string;
  barraDeFerramentas?: ReactNode;
}

export const LayoutBase: React.FC<LayoutBaseProps> = ({ children, titulo, barraDeFerramentas }) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const theme = useTheme();

  const {toggleDrawerOpen} = useDrawerContext();

  return (
    <Box height='100%' display="flex" flexDirection="column" gap={1}>

      <Box padding={1} display='flex' alignItems='center' justifyContent='flex-start' height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} gap={1}>
        {smDown && (<IconButton onClick={toggleDrawerOpen}>
          <Icon>menu</Icon>
        </IconButton>)}

        <Typography variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'} whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>
          {titulo}
        </Typography>
      </Box>

      {barraDeFerramentas &&(<Box>
        <Divider/>
        {barraDeFerramentas}
      </Box>)}

      <Box flex={1} overflow="auto">
        <Divider/>
        {children}
        <Divider/>
      </Box>

    </Box>
  );
};