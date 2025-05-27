import React from 'react'
import { Card, CardContent, CardMedia, Grid, Paper, Typography, Button } from '@mui/material'
import Container from '@mui/material'
import '../product/product.css'
import { Box } from '@mui/material'

import BasicSpeedDial from './DropSlide'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CachedIcon from '@mui/icons-material/Cached';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom'
import axios from 'axios'


const NewArrival = [
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
function ProductList() {

    const [products, setProducst] = React.useState([]);


    const handleProductList = async () => {
        await axios.get('https://fakestoreapi.com/products')
            .then(function (response) {
                setProducst(response.data);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    React.useEffect(() => {
        handleProductList();
        //     axios.get('https://fakestoreapi.com/products')
        //         .then(function (response) {
        //             setProducst(response.data);
        //         })
        //         .catch(function (error) {
        //             // handle error
        //             console.log(error);
        //         })
        //         .finally(function () {
        //             // always executed
        //         });
        // }
    }, [])



    return (
        <div className='Newarrival'>
            <Grid container spacing={2} sx={{ bgcolor: '#eeeeee', borderRadius: '5px', minHeight: '45vh' }} >
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    {/* <Box sx={{bgcolor: '#fafafa', height: '30vh'}} /> */}
                    <Typography variant={"h5"} style={{ borderBottom: 'solid 1px gray' }} className="Newarrival">
                        <span>
                            New Arrival
                        </span>
                    </Typography>
                </Grid>

                {products.map((item, index) => {
                    return (

                        <Grid key={index} item xs={6} sm={3} md={4} lg={2} >

                            <Card className='Card' sx={{ position: 'relative' }} >
                                <Typography variant='p' component='p' sx={{ position: 'absolute', ml: '70%', cursor: 'pointer' }}>

                                    <FavoriteBorderIcon />
                                    <Button>
                                        <ShoppingCartIcon />
                                    </Button>
                                    <Button>
                                        <CachedIcon />
                                    </Button>
                                </Typography>
                                {/* <Typography sx={{ position: 'absolute', display: 'float'}}> 
                                       < BasicSpeedDial />
                                    </Typography> */}
                                 <Link to={"/product/" + item.id}>
                                    <CardMedia
                                        component='img'
                                        width="100"
                                        height="150"
                                        image={item.image}
                                        alt="unsplash image"
                                    />
                                </Link>
                                <CardContent>
                                    <Typography variant='h6' component='p' sx={{ color: 'gold', fontWeight: 'Bold' }} className='Gallery'>
                                        {item.price}
                                    </Typography>
                                    <Typography variant='p' component='p'>
                                        {item.title.substr(0,12)}...
                                    </Typography>
                                    {/* <Typography sx={{ ml: '70%', cursor: 'pointer', display: 'flex' }}>
                                            <Button>
                                                <ShoppingCartIcon />
                                            </Button>
                                        </Typography> */}
                                </CardContent>
                            </Card>
                        </Grid>

                    )
                })}

            </Grid>
        </div>
    )
}
export default ProductList