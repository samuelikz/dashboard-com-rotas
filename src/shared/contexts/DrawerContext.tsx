import { createContext, useCallback, useContext, useState } from 'react';

interface DrawerProviderProps {
    children?: React.ReactNode;
}

interface IDrawerOption{
  icon: string;
  path: string;
  label: string;
  secondary: string;
}

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOptions: IDrawerOption[];
  setdrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
}


const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setdrawerOptions] = useState<IDrawerOption[]>([]);


  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
    setdrawerOptions(newDrawerOptions);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen,drawerOptions, setdrawerOptions: handleSetDrawerOptions , toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};