import React from 'react'
import { Box, Card, CardContent, CardMedia, Hidden, Paper, Typography } from '@mui/material'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import styled from '@emotion/styled';
import '../navigation/style/Tourcard.css';
import { Link } from 'react-router-dom';
import { Margin } from '@mui/icons-material';
import '../navigation/style/Tourcard.css'
import ChildCareIcon from '@mui/icons-material/ChildCare';


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
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        name: 'ProductName4',
        price: 'Price5',
      },{
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        name: 'ProductName4',
        price: 'Price6',
      },{
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        name: 'ProductName4',
        price: 'Price7',
      },
];
const TodayDeal =[
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: '$1',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: '$1',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
        price: '$1',
    },
];

const TourCard =()=> {
    return(
        <div className='Marginslide'>
            <Grid container   spacing={1} >
                <Grid item xs={12} sm={6} md={6} lg={3}   sx={{display: {xs: 'none', sm: 'block', md: 'block', lg: "block", mt: '60px'}}}>
                        <Paper  elevation={1}>
                               <Typography className='TopCategories'>
                               Categories See ALL
                               </Typography>
                               <Typography className='Navcategories'>
                               <ul className='Category'>
                                <Link to={""}>
                                    <li className='subc1'>
                                    <ChildCareIcon />
                                        Babie & Toys
                                    </li>
                                </Link>
                                <Link to={""}>
                                    <li className='subc1'>
                                        Beauty & Personal Care
                                    </li>
                                </Link>
                                <Link to={""}>
                                     <li className='subc1'>
                                        Beauty & Personal Care
                                     </li>
                                </Link>
                                <Link to={""}>
                                    <li className='subc1'>
                                        Clothing, Shoes & Accesories
                                    </li>
                                </Link>
                                <Link to={""}>
                                    <li className='subc1'>
                                        Construction Tools
                                    </li>
                                </Link>
                                <Link to={""}>
                                     <li className='subc1'>
                                        Fitness & Travel Gear
                                    </li>
                                </Link>
                                <Link to={""}>
                                     <li className='subc1'>
                                        Electronic
                                    </li>
                                </Link>
                                <Link to={""}>
                                    <li className='subc1'>
                                        Grocery & Goverment Food
                                    </li>
                                </Link>
                                <Link to={""}>
                                     <li className='subc1'>
                                        Home and Kitchen
                                    </li> 
                                </Link>
                                <Link to={""}>
                                    <li className='subc1'>
                                        Libraries
                                    </li>
                                </Link>
                                <Link to={""}>
                                     <li className='subc1'>
                                        Wines & Liqours
                                     </li>
                                </Link>
                                </ul>
                               </Typography>     
                        </Paper>
                </Grid>  
                <Grid item xs={12} sm={12} md={ 6.40} lg={6.40} sx={{ display: { sm: 'block', md: 'block', lg: 'block'}, p: 2}}>
                        <Paper elevation={1}>
                        <CardMedia
                            component="img"
                            height="336"
                            image={require('../navigation/img/image.png')}
                            alt="Paella dish"
                        />
                        </Paper>
                        <div className='Subcategory'>
                            <Grid container spacing={0.5}  >
                                {CardGallery.map((item,index) =>{
                                    return(
                                    <Grid item xs={1.70} sx={{ display:{ xs: 'none', sm: 'block', md: 'block', lg: 'block' }, p: 1}}>
                                        <Card>
                                            <CardMedia
                                            component="img"
                                            height="100%"
                                            image={item.file}
                                            />
                                                <CardContent>
                                                    <item>{item.name}</item>
                                                </CardContent>
                                        </Card>
                                    </Grid>
                                    )
                                })}
                            </Grid>
                        </div>
                </Grid>
                <Grid item xs={2.60} sx={{display: {xs: 'none', md: 'block', lg: 'block'}}}>
                        <Paper elevation={1}>
                         <Typography className='Todays'>
                            Todaysdeal
                         </Typography>
                          {TodayDeal.map((item, index)=>{
                            return(
                                <Card key={index} sx={{ display: 'flex', p: 2 }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 90, height: 90 }}
                                        image={item.file}
                                        alt="Live from space album cover"
                                    />
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="p">
                                                {item.price}
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            )
                          })} 
                        </Paper>
                </Grid>
            </Grid> 
     </div> 
      
    )
}
export default TourCard