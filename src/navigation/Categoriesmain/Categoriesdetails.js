import { Typography, Grid } from '@mui/material'
import React, { Component } from 'react'
import Flashprops from '../Flashdeal/Flashprops';
import { ProductList } from '../../config/json/ProductList';

// const ProductList =[
//   {
//     file: 'https://content-asset.phsar121.com/products/55bwNURyLv7f2LCeeym5dL6gHXxycUxNBKmU9Zu1.jpg',
//     name: 'productname1',
//     price: '10.00',
//     description: 'Hello Product',
//   },
//   {
//     file: 'https://content-asset.phsar121.com/products/55bwNURyLv7f2LCeeym5dL6gHXxycUxNBKmU9Zu1.jpg',
//     name: 'productname1',
//     price: '10.00',
//     description: 'Hello Product',
//   },
//   {
//     file: 'https://content-asset.phsar121.com/products/55bwNURyLv7f2LCeeym5dL6gHXxycUxNBKmU9Zu1.jpg',
//     name: 'productname1',
//     price: '10.00',
//     description: 'Hello Product',
//   },
//   {
//     file: 'https://content-asset.phsar121.com/products/55bwNURyLv7f2LCeeym5dL6gHXxycUxNBKmU9Zu1.jpg',
//     name: 'productname1',
//     price: '10.00',
//     description: 'Hello Product',
//   },
// ];

export default class Categoriesdetails extends Component {
  render() {
    return (

          // <Grid container spacing={2}>
          //   {ProductList.map((Goods,index) => {
          //     return(
          //       <Grid item xs={4} sm={3} md={3} lg={3} >
          //          <Flashprops item={Goods}/>
          //       </Grid> 
          //     )
          //   })
          //   }
          // </Grid>
          // <Grid container>
          //   {ProductList.map((Pro, index) => {
          //     return(
          //       <Grid key={index} item sm={3}>
          //            <Flashprops  item={Pro}/>
          //       </Grid>
          //     )
          //   })}
          // </Grid>
          <div> 
            <Grid container spacing={2}>
              {ProductList.map((ProList,index) => {
                return(
                  <Grid key={index} item sm={3}>
                    <Flashprops item={ProList}/>
                  </Grid>
                )
              })}
            </Grid>
          </div>
    )
  }
}
