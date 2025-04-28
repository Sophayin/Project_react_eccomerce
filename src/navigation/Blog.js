// import React from 'react'
// import { Container } from '@mui/material'

// function Blog() {
//   return (
//     <Container>

//       <div style={{ marginTop: '140px'}}>
//         Blog
//       </div>
//       </Container>
//   )
// }

// export default Blog
import { Container, Grid } from '@mui/material';
import React, { Component } from 'react'
import Flashdeal from './Flashdeal';
import Flashprops from './Flashdeal/Flashprops';
import { Link } from 'react-router-dom';
import BasicSpeedDial from '../views/product/DropSlide';
import DropSlide from '../views/product/DropSlide';

const ListBlog = [
  {
    file: 'https://content-asset.phsar121.com/products/55bwNURyLv7f2LCeeym5dL6gHXxycUxNBKmU9Zu1.jpg',
    name: "Product ADFsafdsf",
    price: '$500.00',
    description: 'Hello product 1',

  },
  {
    file: 'https://content-asset.phsar121.com/products/55bwNURyLv7f2LCeeym5dL6gHXxycUxNBKmU9Zu1.jpg',
    name: "Productafdsf",
    price: '$500.00',
    description: 'Hello product 2',
  },
  {
    file: 'https://content-asset.phsar121.com/products/55bwNURyLv7f2LCeeym5dL6gHXxycUxNBKmU9Zu1.jpg',
    name: "Productafdsf",
    price: '$500.00',
    description: 'Hello product 2',
  },
  {
    file: 'https://content-asset.phsar121.com/products/55bwNURyLv7f2LCeeym5dL6gHXxycUxNBKmU9Zu1.jpg',
    name: "Productafdsf",
    price: '$500.00',
    description: 'Hello product 2',
  },
];

export default class Blog extends Component {
  render() {
    return (
      <Container >
            {/* <Grid container spacing={2}>
              {
                ListBlog.map((element, index) => {
                  return (

                    <Grid key={index} item xs={6} sm={3} md={ 3} lg={3}>
                        <Link to={'/Product'}> 
                      <Flashprops item={element} />
                      </Link>
                    </Grid>
                  
                  )
                })
              }
            </Grid> */}
            <DropSlide />
      </Container>
    )
  }
}

