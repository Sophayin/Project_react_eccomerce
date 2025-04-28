
import { AppBar, Stack, Typography, Toolbar, Box, Paper, MenuList, MenuItem, ListItem, ListItemText, Menu, List, ListItemIcon } from '@mui/material'
import { Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../Appbar/Appbar.css'
import Grid from '@mui/material'
import Headbar from './Headbar'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../Appbar/Appbar.css'
import { display, width } from '@mui/system'
import { useState } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';

function Menuappbar() {
  const [Imenu, setImenu] = React.useState(false)
  const [Idrop, setIdrop] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleImenu = () => {
    setImenu(!Imenu);
  }
  const handleIdrop = () => {
    setIdrop(!Idrop);
  }


  const handleClickListItem = (event) => {
    setAnchorEl(event);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="Menubar" >
        <Container >
          <AppBar sx={{ bgcolor: 'whitesmoke', marginTop: '65px', boxShadow: 'none', border: '0.1px 0 0.1px solid gray', zIndex: '90'}}>
            <Toolbar>
              <Box>
                <MenuIcon onClick={handleImenu} sx={{ color: 'gray', p: 1, mt: 1, justifyContent: 'right', alignContent: 'right', display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }} />
                <Box sx={{ display: Imenu ? 'flex' : 'none' }} className="Boxmenu" >
                  <Link to={"/"}> <li> Home</li> </Link>
                  <Link to={"/product"}> <li> Product </li> </Link>
                  <Link to={"/categories"}> <li> Categories</li> </Link>
                  {/* <Link to={"/Todaysdeal"}> <li> Todaysdeal</li> </Link> */}
                  <Link to={"/flashdeal"}> <li> Flashdeal</li> </Link>
                  <Link to={"/blog"}> <li> Blog</li> </Link>
                </Box>
              </Box>
              <Stack direction='row' sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, justifyContent: 'center', width: '100%' }} >

                <Link to={"/"}> <li> Home</li> </Link>
                <Link to={"/product"}> <li> Product </li> </Link>
                <Link to={"/Categories"}> <li> Categories</li> </Link>
                {/* <Link to={"/Todaysdeal"}> <li> Todaysdeal</li> </Link> */}
                <Link to={"/flashdeal"}> <li> Flashdeal</li> </Link>
                <Link to={"/blog"}> <li> Blog</li> </Link>

              </Stack>
              <Box className="boxmenu">
                <Typography className='iconsection'>
                  <AccountCircleIcon onClick={handleClickListItem} sx={{ color: 'gray', p: 1, mt: 1, display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }} className="profileicon" />
                </Typography>

                <Menu
                  className='Menufloat'
                  open={open}
                  onClose={handleClose}
                  onClick={(event) => handleMenuItemClick(event)}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.20))',
                      mt: -2,
                      ml: -2,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,

                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 20,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                >
                  <MenuItem >
                    <ListItemIcon>
                      <PersonIcon />
                  </ListItemIcon>
                      Profile
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <LoginIcon />
                    </ListItemIcon>
                      Log In
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      < SensorOccupiedIcon />
                    </ListItemIcon>
                      Sign Up
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                    <LogoutIcon />
                    </ListItemIcon>
                      Log Out
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
            {/* <Menu
            id="menu-appbar"
            // anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
           open={!Idrop}
          >
            <MenuItem onClick={() => { }}>Profile</MenuItem>
            <MenuItem onClick={() => { }}>Sign Up</MenuItem>
            <MenuItem onClick={() => { }}>Log Out</MenuItem>
          </Menu> */}
            {/* <List    
                sx={{ bgcolor: 'whitesmoke' }}
              >
                <ListItem
                  onClick={handleClickListItem}
                >
                  <ListItemText
                    primary="Click to find me"
                  />
                </ListItem>
              </List>
             */}

          </AppBar>
        </Container>
      </div>
    </>
  )
}

export default Menuappbar