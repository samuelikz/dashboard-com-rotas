import { Route,Routes } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { Dashboard } from '../pages';

export function AppRoutes() {
  const { setdrawerOptions } = useDrawerContext();
  useEffect(() => {
    setdrawerOptions([
      {
        label: 'Dashboard',
        icon: 'home',
        path: '/pagina-inicial',
        secondary: 'Dashboard'
      }
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard/>} />
      {/*<Route path="*" element={<Navigate to='/pagina-inicial'/>} />*/}
    </Routes>
  );
}