import { CardMedia, Grid, Card } from '@mui/material'
import React from 'react'
// import '../navigation/style/Tourcard.css'
import '../navigation/Banner.css'
const BannerImage =[
    {
      file: 'https://thumbs.dreamstime.com/b/welcome-sign-letters-confetti-background-celebration-greeting-holiday-illustration-banner-confetti-decoration-93802937.jpg',
    },
    {
        file: 'https://thumbs.dreamstime.com/b/welcome-sign-letters-confetti-background-celebration-greeting-holiday-illustration-banner-confetti-decoration-93802937.jpg',
      },
      {
        file: 'https://thumbs.dreamstime.com/b/welcome-sign-letters-confetti-background-celebration-greeting-holiday-illustration-banner-confetti-decoration-93802937.jpg',
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