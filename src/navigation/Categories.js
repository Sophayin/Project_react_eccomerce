import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Categoriesdetails from './Categoriesmain/Categoriesdetails';
import Blog from './Blog';
import { BorderRightRounded, Image } from '@mui/icons-material';

const CateList =[
  {
    file: 'https://content-asset.phsar121.com/products/55bwNURyLv7f2LCeeym5dL6gHXxycUxNBKmU9Zu1.jpg',
    name: 'Main',
  },
];
function Categories() {
  return (
    <>
    <Container> 
        < Categoriesdetails
            item={
              <div>
                <Box sx={{ bgcolor: 'whitesmoke', position: 'relative'}}>
                  <Typography sx={{bgcolor: 'red', color: 'white', width: '200px', height: '40px', borderRadius: '0 30px 30px 0', position: 'absolute'}}>
                      <p style={{ alignContent: 'center', margin: '9px'}}>
                          Cherolet Car Yellow Png
                      </p> 
                  </Typography>
                    <Typography >
                      <img src="https://content-asset.phsar121.com/products/55bwNURyLv7f2LCeeym5dL6gHXxycUxNBKmU9Zu1.jpg" width="600px" height="600"/>
                    </Typography>
                    <Typography >
                      <img src="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387__480.png" width="1200px" height="550"/>
                    </Typography>
                </Box>
              </div>
            }
          />
        {/* <Categoriesdetails /> */}
     </Container>
    </>
  )
}
export default Categories
