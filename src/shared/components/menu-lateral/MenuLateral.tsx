import { Avatar, Box, Divider, Drawer, Icon, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, responsiveFontSizes, useMediaQuery, useTheme } from '@mui/material';
import { useDrawerContext } from '../../contexts';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import React from 'react';

interface MenuLateralProps {
    children?: React.ReactNode;
}

interface IListemItemLinkProps{
  to: string;
  icon: string;
  label: string;
  p: string;
  onClick: (() => void) | undefined;
}

interface IAvatarProps{
  alt: string;
  src: string;
  usuario: string;
  status: string;
}

const AvatarItem: React.FC<IAvatarProps> = ({alt,src,status,usuario}) =>{
  return(
    <ListItem alignItems="center" >
      <ListItemAvatar>
        <Avatar alt={alt} src={src} />
      </ListItemAvatar>
      <ListItemText primary={usuario} secondary={status}/>
    </ListItem> 
  );
};

const ListItemLink: React.FC<IListemItemLinkProps> = ({to, icon,label,onClick, p}) => {

  const navigate = useNavigate();
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({path: resolvedPath.pathname, end: false});

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };
  
  return(
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} secondary={p}/>
    </ListItemButton>
  );
};

export const MenuLateral: React.FC<MenuLateralProps> = ({ children }) => {
  let theme = useTheme();
  theme = responsiveFontSizes(theme);
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(40)} height="100%" display='flex' flexDirection="column">
          <Box width="100%" height={theme.spacing(10)} display="flex" alignItems="center" justifyContent="center">
            <List sx={{ width: '100%', maxWidth: 360}}>
              <AvatarItem alt='Administrador' src='a/logo.png' status='Admin' usuario='Admin'/>
            </List>
          </Box>
          <Divider />
          <Box flex={1}>
            <List sx={{ width: '90%', padding:'0', margin: 2 }} component="nav" aria-labelledby="nested-list-subheader">
              {drawerOptions.map(drawerOptions =>(
                <ListItemLink
                  key={drawerOptions.path}
                  icon={drawerOptions.icon}
                  to={drawerOptions.path}
                  label={drawerOptions.label}
                  p={drawerOptions.secondary}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>

        </Box>
      </Drawer>

      <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(40)}>
        {children}
      </Box>

    </>
  );
};