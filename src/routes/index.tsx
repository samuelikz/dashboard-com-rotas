import Button from '@mui/material/Button';
import { Route,Navigate,Routes } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';

export function AppRoutes() {
  const { toggleDrawerOpen } = useDrawerContext();
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>Entrar</Button>} />
      <Route path="*" element={<Navigate to='/pagina-inicial'/>} />
    </Routes>
  );
}