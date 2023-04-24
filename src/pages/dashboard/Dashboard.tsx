import { Box } from '@mui/material';
import { LayoutBase } from '../../shared/layouts';
import { BarraFerramenta, Navegadores, Sistemas } from '../../shared/components';

export const Dashboard = () =>{
  return(
    <LayoutBase titulo='Dashboard' barraDeFerramentas={<><BarraFerramenta/></>}>
      <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='space-around'>
        <Sistemas/>
        <Navegadores/>
      </Box>
    </LayoutBase>
  );
};