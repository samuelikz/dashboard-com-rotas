import { Avatar, Box, Divider, Drawer, Icon, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, responsiveFontSizes, styled, useMediaQuery, useTheme } from '@mui/material';
import { useDrawerContext } from '../../contexts';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import React from 'react';

interface MenuLateralProps {
  children?: React.ReactNode;
}

interface IListemItemLinkProps {
  to: string;
  icon: string;
  label: string;
  p: string;
  onClick: (() => void) | undefined;
}

interface IAvatarProps {
  alt: string;
  src: string;
  usuario: string;
  status: string;
}

const AvatarItem: React.FC<IAvatarProps> = ({ alt, src, status, usuario }) => {
  return (
    <ListItem alignItems="center" >
      <ListItemAvatar>
        <Avatar alt={alt} src={src} />
      </ListItemAvatar>
      <ListItemText primary={usuario} secondary={status} />
    </ListItem>
  );
};

const ListItemLink: React.FC<IListemItemLinkProps> = ({ to, icon, label, onClick, p }) => {

  const navigate = useNavigate();
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} secondary={p} />
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
          <Box
            width="91%"
            height={theme.spacing(8)}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              margin: theme.spacing(2),
              backgroundColor: '#fff',
              boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)'
            }}
          >
            <List sx={{ width: '100%', maxWidth: 290, display: 'flex' }}>
              <AvatarItem alt='Administrador' src='/logo.png' status='Admin' usuario='Admin' />
              <ListItemLink
                icon='logout'
                to='/'
                label=''
                p=''
                onClick={smDown ? toggleDrawerOpen : undefined}
              />
            </List>
          </Box>
          <Box flex={1}>
            <List sx={{ width: '100%', padding: '0', margin: 0 }}>
              {drawerOptions.map((drawerOption, index) => (
                <div key={drawerOption.path}>
                  <ListItemLink
                    icon={drawerOption.icon}
                    to={drawerOption.path}
                    label={drawerOption.label}
                    p={drawerOption.secondary}
                    onClick={smDown ? toggleDrawerOpen : undefined}
                  />
                </div>
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