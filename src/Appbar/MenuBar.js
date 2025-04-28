// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
// import { Menu as IconMenu } from '@mui/icons-material';
// import MenuIcon from '@mui/icons-material/Menu';


// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Setting', 'Profile', 'Account', 'Dashboard', 'Logout'];


// function MenuBar() {
//   const [settingright, setSettingright] = React.useState(false)
//   const [anchorElUser, setAnchorElUser] = React.useState(false);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu =(event) => {
//     setAnchorElUser (false)
//   }

//   return (
//     <AppBar position="static">
//       <Container>
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               // fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             <MenuIcon />
//             <Menu
//               id="menu-appbar"
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={'true'}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem >
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             <Button
//               sx={{ my: 2, color: 'white', display: 'block' }}
//             >
//               {"Home"}
//             </Button>
//             <Button
//               sx={{ my: 2, color: 'white', display: 'block' }}
//             >
//               {"Home"}
//             </Button>
//           </Box>
//           <Box sx={{ flexGrow: 0 }} disableGutters>
//             <IconButton onClick={handleOpenNavMenu}
//               sx={{ p: 0 }}>
//               <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
//             </IconButton>
//             <Container disableGutters>
//               <Menu
//                 sx={{ mt: '45px' }}
//                 id="menu-appbar"

//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={anchorElUser}
//                 onClose={handleCloseNavMenu}
//               >
//                 <MenuItem >
//                   <Typography textAlign="center">{"Setting"}</Typography>
//                 </MenuItem>
//                 <MenuItem>
//                   <Typography textAlign="center">{"Profile"}</Typography>
//                 </MenuItem>
//                 <MenuItem>
//                   <Typography textAlign="center">{"Account"}</Typography>
//                 </MenuItem>

//               </Menu>
//             </Container>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>

//   )

// }export default MenuBar;
// // import React from "react";
// // class MenuBar extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       count: 0
// //     };
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <p>You clicked {this.state.count} times</p>
// //         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
// //           Click me
// //         </button>
// //       </div>
// //     );
// //   }

// // }export default MenuBar
// // import { ButtonGroup } from '@mui/material';
// // import React, { useState } from 'react';

// // function MenuBar() {
// //   // Declare a new state variable, which we'll call "count"
// //   const [count, setCount] = useState(0);

// //   return (
// //     <div>
// //       <p>You clicked {count} times</p>
// //       <ButtonGroup onClick={() => setCount(count + 1)}>
// //         -: +
// //        </ButtonGroup>
// //     </div>
// //   );
// // } export default MenuBar
// import React from 'react'

// function MenuBar() {
//     return (
//         <div>
//             <Container>
//                 <Toolbar>

//                 </Toolbar>
//             </Container>
//         </div>
//     )
// }

// export default MenuBar
