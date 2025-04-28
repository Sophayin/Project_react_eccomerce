import { ClassNames } from '@emotion/react'
import { Grid, Typography, Card, CardMedia, CardContent, Paper, Box } from '@mui/material'
import React from 'react'
import Rating from '@mui/material/Rating'
import '../Gridtesting/Gridtesting.css'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import axios from 'axios'


const CardGallery = [
  {
    file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
    name: 'ProductName1',
    price: 'Price1',
  },
  {
    file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
    name: 'ProductName2',
    price: 'Price2',
  },
  {
    file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
    name: 'ProductName3',
    price: 'Price3',
  },
  {
    file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
    name: 'ProductName4',
    price: 'Price4',
  },
];
function Descriptionpro() {
  const [products, setProducst] = React.useState([]);

  // const handleGridtesting = async () => {
  //     await axios.get('https://fakestoreapi.com/products?limit=4')
  //         .then(function (response) {
  //             setProducst(response.data);
  //         })
  //         .catch(function (error) {
  //             // handle error
  //             console.log({ error: error })
  //         })
  //         .finally(function (rest) {
  //             console.log('hello')
  //         });
  // }
  const handleGridtesting =() =>{
        axios.get('https://fakestoreapi.com/products?limit=4')
        .then(function(response){
          setProducst(response.data);
        })
  }
  React.useEffect(() => {
      handleGridtesting();
  }, [])
  return (
    <>
      <Grid container xs={12} sx={{ mt: 3 }}>
        <Grid item xs={12} sm={4} md={4} lg={4} sx={{ display: 'block', p: 1 }} spacing={2}>
          <Paper sx={{ ml: -1 }}>
            <Typography sx={{ borderBottom: '0.01px solid gray', width: '80%', ml: 2, fontSize: 9, p: 1 }}>
              Sold By
            </Typography>
            <Typography sx={{ ml: 2 }}>
              Shop Name
            </Typography>
            <Typography sx={{ ml: 2 }}>
              address
            </Typography>
            <Box sx={{ bgcolor: 'white', width: '340px', height: '30%', mt: 2, ml: 2, border: '0.01px solid gray', borderRadius: '3px', position: 'relative' }}>
              <Typography sx={{ ml: 16, mt: 1 }} >
                <Rating name="size-small" defaultValue={2} size="small" />
              </Typography>
              <Typography sx={{ fontSize: 9, ml: 16 }}>
                ( 0 Customer Reviews)
              </Typography>
            </Box>
            <Box sx={{ bgcolor: 'whitesmoke', width: '39០px', height: '50px', border: '0.01px 0 1px 0 solid gray', mt: 3, borderTop: '1px solid gray' }}>
              <Grid display={'flex'}>
                <Grid xs={4}>
                  <li style={{ background: '#ed6c02', padding: 16, color: 'white', textDecoration: 'none', listStyle: 'none', cursor: 'pointer' }}>
                    Visit Store
                  </li>
                </Grid>
                <Grid xs={2} sx={{ color: 'black', mt: 2, ml: 3, cursor: 'pointer' }}>
                  <FacebookIcon />
                </Grid>
                <Grid xs={2} sx={{ color: 'black', mt: 2, cursor: 'pointer' }}>
                  <TwitterIcon />
                </Grid>
                <Grid xs={2} sx={{ color: 'black', mt: 2, cursor: 'pointer' }}>
                  <GoogleIcon />
                </Grid>
                <Grid xs={2} sx={{ color: 'black', mt: 2, cursor: 'pointer' }}>
                  <YouTubeIcon />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8} sx={{ display: 'block', p: 1 }} spacing={2}>
          <Paper sx={{ mr: -1 }}>
            <Typography sx={{ borderBottom: '0.01px solid gray', width: '98%', p: 1 }}>
              Description
            </Typography>
            <Typography sx={{ ml: 2, p: 1 }}>
              None
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container xs={12} >
        <Grid item xs={12} sm={4} md={4} lg={4} sx={{ display: 'block', p: 1 }} spacing={2}>
          <Paper sx={{ ml: -1 }}>
            <Typography sx={{ borderBottom: '0.01px solid gray', width: '90%', ml: 2, p: 1 }}>
              Top Selling Product
            </Typography>
            {products.map((item, index) => {
              return(
                <Card key={index} sx={{ display: 'flex', p: 2 }} >
                   <Link to={"/product/" + item.id}>
                    <CardMedia
                      component="img"
                      sx={{ width: 90, height: 90 }}
                      image={item.image}
                      alt="Live from space album cover"
                    />
                  </Link>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="p">
                        {item.title}
                      </Typography>
                      <Rating name="size-small" defaultValue={2} size="small" />
                      <Typography component="div" variant="6">
                        {item.price}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              )
            })}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8} sx={{ display: 'block', p: 1, mt: -17 }} spacing={2}>
          <Paper sx={{ mr: -1 }}>
            <Typography sx={{ borderBottom: '0.01px solid gray', width: '98%', p: 1 }}>
              Related Product
            </Typography>
            <Grid container>
              {
                products.map((item, index) => {
                  return (
                    <Grid key={index} item xs={6} sm={4} md={3} lg={3} spacing={2} sx={{ p: 1 }} >
                      <Card className='Card'  >
                        <Link to={"/product/" + item.id}>
                          <CardMedia
                            key={index}
                            component='img'
                            width="100"
                            height="150"
                            image={item.image}
                            alt="unsplash image"
                          />
                      
                          <CardContent>
                            <Typography variant='h6'>
                              {item.price}
                            </Typography>
                            <Typography>
                              {item.title.substr(0.8)}..
                            </Typography>
                          </CardContent>
                        </Link>
                      </Card>
                    </Grid>
                  )
                })
              }
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default Descriptionpro

{/* //  <Typography sx={{ fontSize: 11, position: 'relative'}}>
//             <p style={{ position: 'absolute', mt: 9, borderBottom: '1px solid gray', width: '310px'}}>
//                Sold By
//             </p>
//           </Typography>
//           <Typography sx={{ mt: 4}} variant='h5'>
//              Shop Name
//           </Typography>
//           <Typography >
//             address
//           </Typography>
//           <Box sx={{ bgcolor: 'white', width: '340px', height: '30%', mt: 2, border: '0.01px solid gray', borderRadius: '3px', position: 'relative'}}>
//             <Typography sx={{ ml: 16, mt: 1 }} >
//               <Rating name="size-small" defaultValue={2} size="small"/> 
//             </Typography>
//             <Typography sx={{ fontSize: 9 , ml: 16}}>
//               ( 0 Customer Reviews)
//             </Typography>
//           </Box>       
//           <Box sx={{ bgcolor: 'whitesmoke', width: '39០px', height: '50px', border: '1px 0 1px 0 solid gray', mt: 3, borderTop: '1px solid gray'}}>
//             <Grid display={'flex'}>
//               <Grid xs={4}>
//                 <li style={{ background: 'red', padding: 15, color: 'white', textDecoration: 'none', listStyle: 'none', cursor: 'pointer'}}>
//                   Visit Store
//                 </li>
//               </Grid>
//               <Grid xs={2} sx={{ color: 'black', mt: 2, ml: 1}}>
//                  Facebook
//               </Grid>
//               <Grid xs={2} sx={{ color: 'black', mt: 2, ml: 2}}>
//                  Twitter
//               </Grid>
//               <Grid xs={2} sx={{ color: 'black', mt: 2}}>
//                  Google
//               </Grid>
//               <Grid xs={2} sx={{ color: 'black', mt: 2,}}>
//                  Youtube
//               </Grid>
//             </Grid>  */}