// import React from 'react'
// // import { Card, CardContent, Grid, Typography } from '@mui/material'
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';

// function Gridtesting() {
//   return (
//     // <Grid container spacing={3} xs={4} sm={6} lg={12}>
//     //     <Grid item xs={2} sx={{bgcolor: 'red'}}>
//     //         <Card>
//     //             <CardContent>
//     //                 <Typography>
//     //                      Hello Grid
//     //                 </Typography>
//     //             </CardContent>
//     //         </Card>

//     //     </Grid>
//     //     <Grid item xs={2} sx={{bgcolor: 'red'}}>
//     //            <Typography>
//     //             Hello Grid
//     //            </Typography>
//     //     </Grid>
//     //     <Grid item xs={2} sx={{bgcolor: 'red'}}>
//     //            <Typography>
//     //             Hello Grid
//     //            </Typography>
//     //     </Grid>
//     //     <Grid item xs={2} sx={{bgcolor: 'red'}}>
//     //            <Typography>
//     //             Hello Grid
//     //            </Typography>
//     //     </Grid>
//     //     <Grid item xs={2} sx={{bgcolor: 'red'}}>
//     //            <Typography>
//     //             Hello Grid
//     //            </Typography>
//     //     </Grid>
//     //     <Grid item xs={2} sx={{bgcolor: 'red'}}>
//     //            <Typography>
//     //             Hello Grid
//     //            </Typography>
//     //     </Grid>
//     // </Grid>
//     // <Grid xs={12}>
//     //     <Box sx={{ bgcolor: '#fafafa', height: '20vh' }} />
//     //         <Typography>
//     //             New Arrival
//     //         </Typography>
//     //         <Grid item xs={3}>
//     //             <Card>
//     //                 <CardMedia
//     //                 component="img"
//     //                 width="300"
//     //                 height="300"
//     //                 image={require('../navigation/img/image.png')}
//     //                 />
//     //                     <CardContent>
//     //                         <Typography>
//     //                                 Hello Grid
//     //                             </Typography>
//     //                     </CardContent>
//     //             </Card>
//     //         </Grid>

//     // </Grid>
//   )
// }
// export default Gridtesting
// import React from 'react'
// import { AppBar, Button, Card, CardContent, CardMedia, IconButton, Toolbar, Typography } from '@mui/material'
// import { BedTwoTone, CatchingPokemon } from '@mui/icons-material'
// import { Stack } from '@mui/system'

// function Gridtesting() {
//   return (
//     <AppBar position='static'>
//       <Toolbar>
//         <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
//                 {/* <CatchingPokemon /> */}
//         </IconButton>
//         {/* <Typography variant='h5' component='div' sx={{ flexGrow: 1}}>
//             POKEMONAPP
//         </Typography> */}
//         <Stack direction='row' spacing={2} edge='middle' >
//             {/* <Typography variant='h5' component='div' sx={{flexGrow: 1}}>About</Typography> */}
//             {/* <Typography variant='h5' component='div' sx={{flexGrow: 1}}>Product</Typography>
//             <Typography variant='h5' component='div' sx={{flexGrow: 1}}>Price</Typography>
//             <Typography variant='h5' component='div' sx={{flexGrow: 1}}>contact</Typography> */}
//             <Card sx={{p:1}} >
//                 <CardMedia
//                  component='img'
//                 width='100'
//                 height='100'
//                 image={require('../navigation/img/image.png')}
//                 />
//                 <CardContent>
//                    <Typography variant='h6' component='div'>
//                        Price
//                    </Typography>
//                 </CardContent>
//             </Card>
//             <Card sx={{p:1}} >
//                 <CardMedia
//                  component='img'
//                 width='100'
//                 height='100'
//                 image={require('../navigation/img/image.png')}
//                 />
//                 <CardContent>

//                 </CardContent>
//             </Card><Card sx={{p:1}} >
//                 <CardMedia
//                  component='img'
//                 width='100'
//                 height='100'
//                 image={require('../navigation/img/image.png')}
//                 />
//                 <CardContent>

//                 </CardContent>
//             </Card>  
//         </Stack>
//       </Toolbar>
//     </AppBar>
//   )
// }

// export default Gridtesting
// import React from 'react'
// import { Grid, Box, CardMedia, Card, Typography } from '@mui/material'
// import { bgcolor } from '@mui/system'
// import { grey } from '@mui/material/colors'


// function Gridtesting() {
//   return (
// //     <Grid container bgcolor='#fafafa'>
//         {/* <Box
//             sx={{
//                 width:'100%',
//                 height: '10%',
//                 backgroundColor: '#fafafa',
//                 // '&:hover': {
//                 //   backgroundColor: 'primary.main',
//                 //   opacity: [0.9, 0.8, 0.7],
//                 // },
//             }}
//         /> */}
//         <Typography variant='h5'>
//             Hello Card
//         </Typography>
//         <Typography style={{borderTop:'1px solid grey'}}>
//         </Typography>
//             <Grid item xs={2} >
//                 <Card sx={{mt: 5, mb: 1,}} >
//                     <CardMedia
//                     component="img"
//                     width='300'
//                     height='300'
//                     image={require('../navigation/img/image.png')}
//                     />
//                     <Typography variant='h6' component='div'>
//                         Product Name
//                     </Typography>
//                     <Typography variant='h5' component='div' >
//                         Price
//                     </Typography>
//                 </Card>
//             </Grid>
//     </Grid>
//     // // <Grid>
//     // //     <Box sx={{ 
//     // //         widht:'20%',
//     // //         bgcolor:'Primary.dark',
//     // //         }} >
//     // //             <Typography variant='h5' component='div' >
//     // //                New Arrival
//     // //             </Typography>
//     // //     </Box>
//     // </Grid>
//   )
// }
/* <Typography variant='h1' gutterBottom >
   Hello Typography
 </Typography>
 <Typography variant='h2' gutterBottom>
    Hello typography h2
 </Typography>
 <Typography variant='h3' >
    Hello typography h3
 </Typography>
 <Typography variant='h4'>
   Hello Typography H4
 </Typography>
 <Typography variant='5'>
   Hello Typography h5
 </Typography> */
/* <Typography variant='h1' gutterBottom>
    Hello Typography h1
</Typography>
<Typography variant='h2' gutterBottom>
    Hello Typography h2
</Typography>
<Typography variant='subtitle1'>
    Hello subtitle 1 <br />
    there  are some example of the typography for training project to implement the real project.
    It is assign by senior developer to the internship staff. thanks for joining us.
</Typography>
<Typography variant='bubstitle2'>
    Hello subtitle 2 <br/>
    there  are some example of the typography for training project to implement the real project.
    It is assign by senior developer to the internship staff. thanks for joining us.
</Typography>
<Typography variant='body1' gutterBottom>
there  are some example of the typography for training project to implement the real project.
    It is assign by senior developer to the internship staff. thanks for joining us.
</Typography>
<Typography variant='button' gutterBottom>
   button
</Typography>
<Typography variant='h1'>
 testing h1& h2
</Typography> */


// export default Gridtesting
import { Card, CardContent, CardMedia, Grid, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import '../views/product/product.css'
import styled from '@mui/material'
import '../Gridtesting/Gridtesting.css'
import { borderRadius } from '@mui/system'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import { Delete } from '@mui/icons-material'
const BestSelling = [
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name1',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name2',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name3',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name4',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name5',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name6',
    },
];
const FeatureItem = [
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name1',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name2',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name3',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name4',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name5',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name6',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name7',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name8',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name9',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name10',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name11',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name12',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name13',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name14',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name15',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name16',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name17',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: 'Price',
        name: 'Product Name18',
    },
];


function Gridtesting() {
    const [products, setProducst] = React.useState([]);

    // const handleGridtesting = async () => {
    //     await axios.get('https://fakestoreapi.com/products')
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
    const handleGridtesting = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(function (response) {
                setProducst(response.data);
            })
    }

    React.useEffect(() => {
        handleGridtesting();
    }, [products])

    // const [products, setProducts] = React.useState([]);

    // const handleGridtesting = async () => {
    //     await axios.get ('https://fakestoreapi.com/products')
    //     .then(function (response) {
    //         setProducts (response.data);
    //     })
    //     // catch (function (error){
    //     //       handle error
    //     // }) 
    //     // .finally (function (rest){

    //     // })
    // }
    // React.useEffect (() =>{
    //     handleGridtesting();
    // }), [])
    return (
        <>
            <div className='Bestsell'>
                <Grid container spacing={2} sx={{ bgcolor: '#eeeeee', borderRadius: '2px', minHeight: '40vh' }} >
                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        <Typography variant='h6' style={{ borderBottom: 'solid 1px gray' }} className="Bestselling">
                            <span>
                                Best Selling
                            </span>

                        </Typography>
                    </Grid>
                    {products.map((item, index) => {
                        return (
                            <Grid item xs={6} sm={3} md={4} lg={2} >
                                <Card className='Card' >
                                    <Link to={"/product/" + item.id}>
                                        <CardMedia
                                            component='img'
                                            width='100'
                                            height='150'
                                            image={item.image}
                                        />
                                        <CardContent>
                                            <Typography variant='h6' sx={{ color: 'gold'}} className='Gallery'>
                                                {item.price}
                                            </Typography>
                                            <Typography variant='p' >
                                                {item.title.substr(0, 10)}...
                                            </Typography>
                                        </CardContent>
                                    </Link>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>

            <div className='Bestsell'>
                <Grid container spacing={2} sx={{ bgcolor: '#eeeeee', height: 'auto', borderRadius: '2px' }} >
                    <Grid item xs={12}>
                        <Typography variant='h6' style={{ borderBottom: 'solid 1px gray' }} className="Bestselling">
                            <span>
                                Features
                            </span>
                        </Typography>
                    </Grid>
                    {
                        products.map((item, index) => {
                            return (
                                <Grid key={index} item xs={6} sm={3} md={4} lg={2} >
                                    <Card className='Card' >
                                        <Link to={"/product/" + item.id}>
                                            <CardMedia
                                                component='img'
                                                width='100'
                                                height='150'
                                                image={item.image}
                                            />
                                            <CardContent>
                                                <Typography variant='h6' sx={{ color: 'gold'}} className='Gallery'>
                                                    {item.price}
                                                </Typography>
                                                <Typography variant='p' className='Gallery'>
                                                    {item.title.substr(0,10)}..
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        </>
    )
}

export default Gridtesting