import React from 'react'
import { Container } from '@mui/material'
// import Headbar from '../Appbar/Headbar'
// import { Card, CardContent, CardMedia, Typography, Box, Fab, Button } from '@mui/material'
// import { color, Container } from '@mui/system'
// import Divider from '@mui/material/Divider'
// import Rating from '@mui/material/Rating'
// import AddIcon from '@mui/icons-material/Add';
// import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
// import Link from '@mui/material/Link';
// import { Description, Image } from '@mui/icons-material'
import Descriptionpro from '../Productdescription/Descriptionpro'
import Productreview from '../Productdescription/Productreview'


function Product() {
  return (
    <>
    <Container >
      <Productreview />
      <Descriptionpro />
    </Container>
    </>
    /* <Headbar /> */
    //  <Container sx={{ mt:'140px'}}>
    //  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    //     <Card  sx={{ display: 'flex', p: 2}}>
    //         <CardMedia
    //         component='img'
    //         sx={{
    //           width: 500,
    //           height: 490,
    //         }}
           
    //         image="http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png"
    //         /> 
    //            <CardContent sx={{ width: '100%' }}>
    //               <Typography component="div" variant="h5" >
    //                 Product Name
    //                 <br/>
    //                 <Rating name="size-small" defaultValue={2} size="small"/> 
    //                 <Fab variant="extended" size='small' color='success' sx={{ left: 400, mb: 2}}>
    //                      <p style={{ fontSize: 9}}>
    //                      In Stock
    //                      </p>
    //                 </Fab>
    //               </Typography>
    //               <Divider component=""/>
    //               <Typography component="div" variant="p" sx={{ mt: 2, mb: 2}} >
    //                  <p style={{ fontSize: 9}}>
    //                      Sold By: 
    //                   </p> <br/>
    //                   By Default
    //               </Typography>
    //               <Divider component="p"/>
    //               <Typography component="div" variant="h6" sx={{ display: 'flex', mt: 2, mb: 2}}>
    //                 <p style={{ fontSize: 11, marginRight: 100}}>
    //                   Price: 
    //                 </p>
    //                         700$
    //               </Typography>
    //               <Divider component=""/>
    //               <Typography component="div" variant="p" sx={{ mt: 2, mb: 2}}>
    //               <p style={{ fontSize: 9}}>
    //                     Size: 
    //                   </p>
    //                   <p style={{ fontSize: 9}}>
    //                      Color: 
    //                   </p>
                    
    //               </Typography>
    //               <Divider component=""/>
    //               <Typography component="div" variant="p" sx={{ mt: 2, mb: 2}}>
    //                quantity: 
    //                 <Fab size="small" aria-label="add" sx={{ ml: 5}}>
    //                   <HorizontalRuleIcon />
    //                 </Fab>
    //                 <Fab size="small" aria-label="add" sx={{ ml: 2}}>
    //                   {4}
    //                 </Fab>
    //                 <Fab size="small" aria-label="add" sx={{ ml: 2}} >
    //                   <AddIcon />
    //                 </Fab>
    //               </Typography>
    //               <Divider component=""/>
    //               <Typography component="div" variant="h6" sx={{ mt: 2, mb: 2}} >
    //                Total Price: 700$
    //               </Typography >
    //               <Typography  >
    //                 <Button variant='outlined' color='warning' sx={{ mr: 2}}> Add to Card</Button>
    //                 <Button variant='contained' color='warning'> Buy Now</Button>
    //               </Typography>
    //              <Typography sx={{ mt: 2, cursor: 'pointer' }}>
    //               <Link to={'/'} sx={{ mr: 5}}>Add to Wishlist</Link>
    //               <Link to={'/'}>Add to Compare </Link>
    //              </Typography>
    //              <Typography sx={{ mt: 2, display: 'flex'}}>
    //                     <p style={{ fontSize: 9, marginRight: 15}}>
    //                       Share: 
    //                     </p>
    //                      Facebook Twitter
    //              </Typography>
    //             </CardContent>
    //      </Card>
    //     </Box> 
      
  )
}

export default Product