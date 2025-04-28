import { Box, Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import Gridtesting from '../Gridtesting/Gridtesting';
import ProductList from '../views/product/ProductList';
import Banner from './Banner';
import TourCard from './TourCard';
import Footag from '../views/Foodtage/Footag';
import Footaginfo from '../views/Foodtage/Footaginfo';
import Menuappbar from '../Appbar/Menuappbar';
import Categories from './Categories';


function Home() {
  return (
   <>
    <Container >
      <Box>
         <TourCard />
      </Box>
      <Banner />
      <ProductList />
      <Gridtesting />
    </Container>
    <Footag />
   </>
   
           
      )
}
export default Home;