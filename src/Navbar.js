import React from 'react'
import './navigation.css';
import './App.css';
import { Link } from 'react-router-dom';
import { Image, Search } from '@mui/icons-material';
import { AppBar, Grid, Toolbar, Typography, Box, List, ListItemText, ListItem, Divider, ListItemAvatar, Avatar, Card, CardMedia, CardContent, MenuList, MenuItem, Button } from '@mui/material';
import Container from '@mui/material/Container';
import { color } from '@mui/system';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';


function Navbar() {
  const [products, setProducst] = React.useState([]);
  const handleGridtesting = () => {
    axios.get('https://fakestoreapi.com/carts')
      .then(function (response) {
        console.log(response)
        setProducst(response.data);
      })
  }

  React.useEffect(() => {
    handleGridtesting();
  }, [products])

  // const [Isearch, setIsearch] = React.useState (false)
  // const handdleIsearch =() =>{
  //   setIsearch (!Isearch);
  // const style = {
  //   width: '100%',
  //   maxWidth: 360,

  // };
  // }

  return (
    <>
      <Typography component='div' sx={{ bgcolor: 'whitesmoke', color: 'gray', marginBottom: 16, position: 'relative' }}>
        <AppBar sx={{ bgcolor: 'whitesmoke', boxShadow: 'none', borderBottom: '1px solid gray' }}>
          <Toolbar>
            <Container >
              <Grid container >
                <Grid md={3} lg={3} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' }, color: 'gray' }}>
                  <Link to={'/'}>

                    <Typography>
                      <img src="https://content-asset.phsar121.com/products/NDeqC5ui1YLvckFJzHPMbSRTD2yeRFYkhpalmV3N.png" alt='image' className='logo' />
                    </Typography>
                  </Link>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={6} sx={{ justifyContent: 'center' }} className="Searchblockbar" >
                  {/* <Box sx={{ display: {xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}}> 
                      <Search onClick ={ handdleIsearch} className='iconsearch' />
                      <Box sx={{ display: Isearch ? 'flex' : 'none' }}>
                      <input placeholder='search for store or product....' className='Searchinput'/>
                      </Box>
                   </Box> */}
                  <Typography sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'block', xl: 'block' } }}>
                    <div className='boxsearch'>
                      <Search className='iconsearch' />
                      <input placeholder='search for store or product....' className='Searchinput' />
                    </div>
                  </Typography>
                </Grid>
                <Grid md={3} lg={3} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' }, color: 'gray' }} >
                  <Grid container spacing={1} sx={{ ml: '25px', mt: '25px', }}>
                    <Grid item sx={4}>
                      <Typography variant='p'>
                        <Badge badgeContent={'0'} color="warning">
                          <AutorenewIcon />
                        </Badge>
                      </Typography>
                      <Typography sx={{ ml: 3, mt: -2 }}>
                        Compare
                      </Typography>

                    </Grid>
                    <Grid item sx={4}>
                      <Typography variant='p' sx={{ cursor: 'pointer' }}>
                        <Badge badgeContent={'0'} color="warning">
                          <ShoppingCartIcon />
                        </Badge>
                      </Typography>
                      <Typography sx={{ ml: 3, mt: -2 }}>
                        Cart
                      </Typography>
                    </Grid>
                    <Grid item sx={4}>
                      <Typography variant='p'>
                        <Badge badgeContent={'0'} color="warning">
                          <FavoriteIcon />
                        </Badge>
                      </Typography>
                      <Typography sx={{ ml: 3, mt: -2 }}>
                        Wishlist
                      </Typography>
                    </Grid>

                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </Typography>
      <List sx={{ zIndex: '99', bgcolor: 'background.paper', maxWidth: 400, marginTop: '-50px', position: 'absolute', marginLeft: '1075px' }} component="nav" aria-label="mailbox folders">
        <Card sx={{ width: '100%', maxWidth: 360, display: 'flex', position: 'relative' }}>
          <CardMedia
            component="img"
            sx={{ width: 70, height: 70 }}
            image='https://content-asset.phsar121.com/products/asFLIZFpTqQ04gLZEbRKjRGhCrWBMWtPPITt8OCz.png'
            alt="img"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="p">
                Price
              </Typography>
              <Typography component="div" variant="p">
                Product
              </Typography>
            </CardContent>
          </Box>
          <Button sx={{ position: 'absolute', marginLeft: '110px' }}>
            <ClearIcon />
          </Button>

        </Card>

        <Card sx={{ width: '100%', maxWidth: 360, display: 'flex', position: 'relative' }}>
          <CardMedia
            component="img"
            sx={{ width: 70, height: 70 }}
            image='https://content-asset.phsar121.com/products/asFLIZFpTqQ04gLZEbRKjRGhCrWBMWtPPITt8OCz.png'
            alt="img"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="p">
                Price
              </Typography>
              <Typography component="div" variant="p">
                Product
              </Typography>
            </CardContent>
          </Box>
          <Button sx={{ position: 'absolute', marginLeft: '110px', position: 'absolute' }}>
            <ClearIcon />
          </Button>
        </Card>
      </List>
      {/* <Typography>
        <AppBar sx={{ backgroundColor: 'whitesmoke', border: '1px solide gray', boxShadow: 'none'}}>
          <Toolbar>
          <Container>
              <Grid Container spacing={5} display={'flex'}>
              <Grid xs={12} sm={12} md={4} lg={4} sx={{color: 'gray'}}>
                <Typography>
                  Hello 1
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} md={4} lg={4} sx={{color: 'gray'}}>
              <Typography>
                  Hello 2
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} md={4} lg={4} sx={{color: 'gray'}}>
              <Typography>
                  Hello 2
                </Typography>
              </Grid>
                  {/* <Grid item xs={4} sx={{ color: 'gray', bgcolor: 'black', ml:'0' }} > 
                    <div>
                      logo
                    </div>
                  </Grid>
                  <Grid item xs={4} > 
                    <div className='TopbarCenter'>
                      <div className='searchbar'>
                        <p> 
                          <Search />
                        </p>
                         <input placeholder='search for store or product....' className='Searchinput'/>
                      </div>
                     </div>
                  </Grid>
                  <Grid item xs={4} sx={{ color: 'gray'}} > 
                    <div className='TopbarCenter'>
                        Cart,wishlist
                    </div>
                  </Grid> */}
      {/* </Grid>
            </Container>
          </Toolbar>
        </AppBar>
    </Typography> */}
      {/* <div className='TopContainer'>
        <div className='TopbarRight'>
           <div className='TopbarLinks'> 
               <span className='cart'>
                     Carts
               </span>
               <span className='wishlist'>
                     wishlist
               </span>
           </div>
        </div>
    </div> */}
      {/* Menubar  */}
      {/* <Grid container display={'flex'} >
        
          <ul className='navbar'>
            <Link to={"/"}> <li>Home</li> </Link>
          </ul>
        
          <ul className='navbar'>
          <Link to={"/Product"}><li>Product</li> </Link>
          </ul>
        
          <ul className='navbar'>
          <Link to={"/Categories"}><li>Categories</li> </Link>
          </ul>
        
          <ul className='navbar'>
          <Link to={"/Todaysdeal"}><li>Todaysdeal</li> </Link>
          </ul>
        
          <ul className='navbar'>
          <Link to={"/Blog"}><li>Blog</li> </Link>
          </ul>
      </Grid> */}
    </>
  )
}

export default Navbar;