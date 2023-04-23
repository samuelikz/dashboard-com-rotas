import Button from '@mui/material/Button';
import { Route,Routes } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';

export function AppRoutes() {
  const { toggleDrawerOpen, setdrawerOptions } = useDrawerContext();
  useEffect(() => {
    setdrawerOptions([
      {
        label: 'Dashboard',
        icon: 'home',
        path: '/pagina-inicial',
        secondary: 'Dashboard'
      }
    ]);
  });

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>Entrar</Button>} />
      {/*<Route path="*" element={<Navigate to='/pagina-inicial'/>} />*/}
    </Routes>
  );
}