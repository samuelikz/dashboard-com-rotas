import { Box } from '@mui/material';
import { LayoutBase } from '../../shared/layouts';
import { Navegadores, Sistemas } from '../../shared/components';

export const Dashboard = () =>{
  return(
    <LayoutBase titulo='Dashboard' barraDeFerramentas={<><p>Barra de ferramentas</p></>}>
      <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='space-around'>
        <Sistemas/>
        <Navegadores/>
      </Box>
    </LayoutBase>
  );
};