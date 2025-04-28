import { Card, CardContent, CardMedia, Typography, Container, Grid } from '@mui/material';
import React from 'react'
import Flashprops from './Flashdeal/Flashprops';
import Rating from '@mui/material/Rating'
import Blog from './Blog';
import { ProductList } from '../config/json/ProductList';



function Flashdeal() {
  // const
  return (
    <>
      <br />
      <Container >
        <Grid container spacing={2} >
          {ProductList.map((item, index) => {
            return (
              <Grid key={index} item xs={6} sm={6} md={3} lg={3}>
                <Flashprops item={item}
                // price={item.price} 
                // description={item.description}
                />
              </Grid>
            )
          }
          )}
        </Grid>
      </Container>

    </>
  )
}

export default Flashdeal