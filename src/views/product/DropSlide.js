// import * as React from 'react';
// import Box from '@mui/material/Box';
// import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
// import SpeedDialAction from '@mui/material/SpeedDialAction';
// import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import PrintIcon from '@mui/icons-material/Print';
// import ShareIcon from '@mui/icons-material/Share';
// import { Card, CardContent,CardMedia, Typography, Grid, Button } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// // import Card from './Card';

// const actions = [
//   { icon: <FileCopyIcon />, name: 'Copy' },
//   { icon: <SaveIcon />, name: 'Save' },
//   { icon: <PrintIcon />, name: 'Print' },
//   { icon: <ShareIcon />, name: 'Share' },
// ];

// export default function BasicSpeedDial() {
//   return (           
//     <Grid sx={{ mb: '90px'}}>
//         <Grid item>
//             <Card sx={{ position: 'relative', width: '500px', height: '400px', mt: '10px'}}>
//                 <Typography sx={{ position: 'absolute', ml: '85%', cursor: 'pointer'}}>
//                     <Button>
//                          <FavoriteBorderIcon />
//                     </Button>
//                 </Typography>
               
//                 <CardMedia 
//                 component='img'
//                 width='300'
//                 height='300'
//                 image='http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png'
//                 />
//                 <CardContent sx={{ display: 'flex'}}>
//                     <Typography >
//                         Hello Card
//                     </Typography>
                
//                     <Typography sx={{ ml: '70%', cursor: 'pointer' }}>
//                         <Button>
//                         <ShoppingCartIcon />
//                         </Button>
                       
//                     </Typography>
//                 </CardContent>
//             </Card>
                            
//         </Grid>
//     </Grid>              
                        
//   );
// }

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
// import SpeedDialAction from '@mui/material/SpeedDialAction';
// import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import PrintIcon from '@mui/icons-material/Print';
// import ShareIcon from '@mui/icons-material/Share';
// import { Card, CardContent, CardMedia, Typography } from '@mui/material';

// const actions = [
//   { icon: <FileCopyIcon />, name: 'Copy' },
//   { icon: <SaveIcon />, name: 'Save' },
//   { icon: <PrintIcon />, name: 'Print' },
//   { icon: <ShareIcon />, name: 'Share' },
// ];

// export default function BasicSpeedDial() {
//   return (
  
//       <SpeedDial
//         ariaLabel="Card"
//         sx={{ position: 'relative', right: 5, top: 50 }}
//         icon={
//             <Card sx={{ position: 'abusolute'}}>
//             <CardMedia
//             component='img'
//             width='200'
//             height='200'
//             image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5OiMl4GWLXVP-rP0vOqbR1ZDRCB8dwadBA&usqp=CAU'
//             />
//             <CardContent>
//                 <Typography>
//                    Hello Card
//                 </Typography>
//             </CardContent>
//          </Card>
//         }
//       >
//         {actions.map((action) => (
//           <SpeedDialAction
//             key={action.name}
//             icon={action.icon}
//             tooltipTitle={action.name}
//           />
//           ))}
//       </SpeedDial>
 
//   );
// }

import { Card, CardContent, CardMedia, IconButton, Tooltip, Typography, SpeedDial, Button } from '@mui/material'
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CachedIcon from '@mui/icons-material/Cached';

function DropSlide() {
  return (
    <div>

        <Card sx={{ width: 400, height: 400, position: 'relative' }}>
            <CardMedia 
            component='img'
            width='300'
            height='300'
            image='https://pngimg.com/d/pokemon_PNG129.png'
            />
                        <Typography sx={{ position: 'absolute', top: 1, right: 1, display: 'block'}}>
                            <Tooltip title='add to cart' placement='left' arrow >
                                <IconButton>
                                    <AddShoppingCartIcon />
                                </IconButton>
                            </Tooltip>
                        </Typography>
                        <Typography sx={{ position: 'absolute', top: 40, right: 1, display: 'block'}}>
                            <Tooltip title='Favorite' placement='left' arrow >
                                <IconButton>
                                    <FavoriteIcon />
                                </IconButton>
                            </Tooltip>
                        </Typography>
                        <Typography sx={{ position: 'absolute', top: 80, right: 1, display: 'block'}}>
                            <Tooltip title='compare' placement='left' arrow >
                                <IconButton>
                                    <CachedIcon />
                                </IconButton>
                            </Tooltip>
                        </Typography>
            <CardContent >
               <Typography variant='h5' component='div'>
                  Price: 
               </Typography>
               <Typography variant='p'>
                  Product Name
               </Typography>
            </CardContent>
        </Card>   
    </div>
  )
}

export default DropSlide