import { CardMedia, Grid, Card } from '@mui/material'
import React from 'react'
// import '../navigation/style/Tourcard.css'
import '../navigation/Banner.css'
const BannerImage =[
    {
      file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
    },
    {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
      },
      {
        file: 'http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png',
      },
];

function Banner() {
  return (
    <div className='bannersection'>
        <Grid container xs={12}  spacing={2} >
            {BannerImage.map((item, index) =>{
                return(
                     <Grid key={index} item xs={12} sm={6} md={6} lg={4} sx={{p:1}}>
                        <Card>
                            <CardMedia
                                component="img"
                                width="300"
                                height="200"
                                image={item.file}
                                alt="unsplash image"
                            />
                        </Card>
                     </Grid>
                )
            })}
        </Grid>
    </div>
  )
}

export default Banner