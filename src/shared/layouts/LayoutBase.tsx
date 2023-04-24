import { Box, Divider, Icon, IconButton, Theme, Typography, useMediaQuery, useTheme, useThemeProps } from '@mui/material';
import { useDrawerContext } from '../contexts';

interface LayoutBaseProps {
  children?: React.ReactNode;
  titulo: string;
}

export const LayoutBase: React.FC<LayoutBaseProps> = ({ children, titulo }) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const theme = useTheme();

  const {toggleDrawerOpen} = useDrawerContext();

  return (
    <Box height='100%' display="flex" flexDirection="column" gap={1}>

      <Box padding={1} display='flex' alignItems='center' justifyContent='flex-start' height={theme.spacing(12)} gap={1}>
        {smDown && (<IconButton onClick={toggleDrawerOpen}>
          <Icon>menu</Icon>
        </IconButton>)}

        <Typography variant="h3">
          {titulo}
        </Typography>
      </Box>

      <Box>
        <Divider/>
        {children}
        <Divider/>
      </Box>

    </Box>
  );
};