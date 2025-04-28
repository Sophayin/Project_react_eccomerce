import { CardContent, CardMedia, Container, Grid } from '@mui/material'
import React from 'react'

function Card() {
  return (
    <Container>
        <Grid>
            <Grid item>
                <Card>
                    <CardMedia
                    component='img'
                    widht='300'
                    height='300'
                    image='http://localhost:3000/static/media/image.13e210b130d7e7fd8b7d.png'
                    />
                    <CardContent>
                        Hello Card
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Card