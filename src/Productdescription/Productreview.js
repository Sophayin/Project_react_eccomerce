import React from 'react'
import { Box, Grid, Typography, Button, Fab, Container } from '@mui/material'
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'
import Rating from '@mui/material/Rating'
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../Productdescription/Productreview.css';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Description } from '@mui/icons-material'
import Descriptionpro from './Descriptionpro'
import { useState, useEffect } from 'react'

var localStorage = require('localStorage');

const GalleryList = [
    {
        file: 'https://content-asset.phsar121.com/products/55bwNURyLv7f2LCeeym5dL6gHXxycUxNBKmU9Zu1.jpg',
        // name: "Proeuct 1",
        // price: "212",

    },
    {
        file: 'https://content-asset.phsar121.com/products/RHg2di5m2tIDUAP1Aht0N2KLRaUuyOA2yKV9p7Ow.png',
        // , name: "Proeuct 1",
        // price: "212",

    },
    {
        file: 'https://content-asset.phsar121.com/products/jFX4nDr5XxMKPARimoSS1D1XWpMKZXeJh45V8USV.png',
        // name: "",
        // price: "212",
    },
    {
        file: 'https://content-asset.phsar121.com/products/1cwcAbq1bY1DE3saOc0ueuZlACxNjSxQSSZKQ9uR.png',
    },
    {
        file: 'https://content-asset.phsar121.com/products/55bwNURyLv7f2LCeeym5dL6gHXxycUxNBKmU9Zu1.jpg',
        // name: "Proeuct 1",
        // price: "212",

    },
    {
        file: 'https://content-asset.phsar121.com/products/jFX4nDr5XxMKPARimoSS1D1XWpMKZXeJh45V8USV.png',
        // name: "",
        // price: "212",
    },

    // { file in project
    //     // file: require('../'),
    //     name: "Proeuct 1",
    //     price: "212",
    // },
];
function Productreview(id) {
    const { productid } = useParams();
    console.log(productid)

    const [imgFeature, setImgFeature] = React.useState(GalleryList[0].file);
    // const [proQty, setProQty] = React.useState(1);
    const handleChangePreviewImg = (item) => {
        setImgFeature(item.file);
    }

    // const handleCart = () => {
    //     setProQty(proQty + 1)

    //     let myList = [{ title: "Hello storeage" }, { price: 0.44 }, { qty: proQty }];
    //     localStorage.setItem('myKey', JSON.stringify(myList));
    // }

    // React.useEffect(() => {
    //     let localData = localStorage.getItem('myKey');
    // }, [imgFeature])
    const [items, setItems] = useState([]);

    useEffect(() => {
        localStorage.setItem('JSON Data', JSON.stringify(items));
    }, [items]);
    console.log(items);
    
    // useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem('items'));
    //     if(items){
    //         setItems(items);
    //     }
    //     console.log(items)
    // })
    

    const [product, setProduct] = React.useState([]); //;fakeapi

    const handleGridtesting = async () => {
        await axios.get('https://fakestoreapi.com/products/' + productid)
            .then(function (response) {
                setProduct(response.data);
            })
            .catch(function (error) {
                console.log({ error: error })
            })
            .finally(function (rest) {
                console.log('hello')
            });
    }
    React.useEffect(() => {
        handleGridtesting();
    }, [productid]);

    return (
        <Container>
            <Box sx={{ bgcolor: 'whitesmoke', width: '100%', height: '630px', mt: 18 }}>
                <Grid Container sx={{ display: 'flex' }}>
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={3} >
                        <Box>
                            <div>
                                <img src={product.image} style={{ width: '510px', height: '460px', margin: '20px' }} />
                            </div>

                            <div style={{ background: "white", width: "76%", height: "92px", marginLeft: '20px' }} >

                                <ul style={{ listStyle: 'none', position: 'relative' }} className="Gallery" >
                                    <Fab size="small" color="whitesmoke" aria-label="add" sx={{ ml: ' 430px', mt: '30px', position: 'absolute' }}>
                                        {/* onClick={nextSlide} */}
                                        <ArrowForwardIosIcon />
                                    </Fab>
                                    <Fab size="small" color="whitesmoke" aria-label="add" sx={{ ml: ' -40px', mt: '30px', position: 'absolute' }}>
                                        {/* onClick{prevSlide} */}
                                        <ArrowBackIosIcon />
                                    </Fab>

                                    {GalleryList.map((item, index) => {
                                        return (
                                            <li key={index} className="galler_li">
                                                <img onClick={() => { handleChangePreviewImg(item) }} src={product.image} style={{ width: '100px', height: '90px', border: '1px solid gray', marginLeft: '-40px', marginRight: '40px' }} />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} lg={9} xl={9} sx={{ width: '100%', ml: '-100px' }}>
                        <Typography component="div" variant="h5" sx={{ mt: '20px', width: '100%' }} >
                            {product.title}
                            <br />
                            <Rating name="size-small" defaultValue={2} size="small" />
                            <Fab variant="extended" size='small' color='success' sx={{ left: 400, mb: 2 }}>
                                <p style={{ fontSize: 9 }}>
                                    In Stock
                                </p>
                            </Fab>
                        </Typography>
                        <Divider component="p" />
                        <Typography component="div" variant="p" sx={{ mt: 2, mb: 2 }} >
                            <p style={{ fontSize: 9 }}>
                                Sold By:
                            </p> <br />
                            By Default
                        </Typography>
                        <Divider component="p" />
                        <Typography component="div" variant="h6" sx={{ display: 'flex', mt: 2, mb: 2 }}>
                            <p style={{ fontSize: 11, marginRight: 100 }}>
                                Price:
                            </p>
                            {product.price}
                        </Typography>
                        <Divider component="" />
                        <Typography component="div" variant="p" sx={{ mt: 2, mb: 2 }}>
                            <p style={{ fontSize: 9 }}>
                                Size:
                            </p>
                            <p style={{ fontSize: 9 }}>
                                Color:
                            </p>

                        </Typography>
                        <Divider component="" />
                        <Typography component="div" variant="p" sx={{ mt: 2, mb: 2 }}>
                            quantity:
                            <Fab size="small" aria-label="add" sx={{ ml: 5 }}>
                                <HorizontalRuleIcon />
                            </Fab>
                            <Fab size="small" aria-label="add" sx={{ ml: 2 }}>
                                {4}
                            </Fab>
                            <Fab size="small" aria-label="add" sx={{ ml: 2 }} >
                                <AddIcon />
                            </Fab>
                        </Typography>
                        <Divider component="" />
                        <Typography component="div" variant="h6" sx={{ mt: 2, mb: 2 }} >
                            Total Price: {product.price}
                        </Typography >
                        <Typography  >
                            <Button variant='outlined' color='warning' onClick={(e) => { }} sx={{ mr: 2 }}> Add to Card</Button>
                            <Button variant='contained' color='warning'> Buy Now</Button>
                        </Typography>
                        <Typography sx={{ mt: 2, cursor: 'pointer' }}>
                            <Link to={'/'} sx={{ mr: 5 }}>Add to Wishlist</Link>
                            <Link to={'/'}>Add to Compare </Link>
                        </Typography>
                        <Typography sx={{ mt: 2, display: 'flex' }}>
                            <p style={{ fontSize: 9, marginRight: 15 }}>
                                Share:
                            </p>
                            Facebook Twitter
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            < Descriptionpro />
        </Container>
    )
}

export default Productreview