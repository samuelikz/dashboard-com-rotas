import { Avatar, Box, Divider, Drawer, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Paper, responsiveFontSizes, useTheme } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import PersonIcon from '@mui/icons-material/Person';

interface MenuLateralProps {
    children?: React.ReactNode;
}

export const MenuLateral: React.FC<MenuLateralProps> = ({ children }) => {
  let theme = useTheme();
  theme = responsiveFontSizes(theme);

  return (
    <>
      <Drawer variant='permanent'>
        <Box width={theme.spacing(40)} height="100%" display='flex' flexDirection="column">
          <Box width="100%" height={theme.spacing(10)} display="flex" alignItems="center" justifyContent="center">
            <List sx={{ width: '100%', maxWidth: 360}}>
              
              <ListItem alignItems="center" >
                <ListItemAvatar>
                  <Avatar alt="Administrador" src="/logo192.png" />
                </ListItemAvatar>
                <ListItemText
                  primary="Usuario"
                  secondary="Status"
                />
              </ListItem>
             
            </List>
          </Box>
          <Divider />
          <Box flex={1}>
            <List
              sx={{ width: '90%', padding:'0', margin: 2 }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" secondary="Apresenta as informações mais importantes"  />
              </ListItemButton>
              
              
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Gerenciamento de Usuários" secondary="Gerencie facilmente os usuários cadastrados no seu sistema" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <GroupsIcon />
                </ListItemIcon>
                <ListItemText primary="Informações de Usuario" secondary="Informações de dados pessoais e outros detalhes relevantes"  />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText primary="informações de sistema" secondary="Informações de sistemas de usuarios" />
              </ListItemButton>

            </List>
          </Box>

        </Box>
      </Drawer>

      <Box height='100vh' marginLeft={theme.spacing(40)}>
        {children}
      </Box>

    </>
  );
};