import { Card, CardContent, CardMedia, Typography, Grid, Fab } from '@mui/material';
import { Container } from '@mui/system';
import React, { Component } from 'react'

export default class Flashprops extends Component {
  render() {
    const { item, description } = this.props;
    return (
      <div style={{ marginTop: '25px' }}>
        <Card>
          <CardMedia
            component='img'
            width='300'
            height='300'
            image={item.image}
          />
          <CardContent>
            <Typography variant='h4' component='h6' sx={{ color: 'gold' }}>
              {item.stockPrice}
            </Typography>
            <Typography sx={{ color: 'gray' }}>
              {item.company}
            </Typography>
            <Typography>
              {item.ticker}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}
