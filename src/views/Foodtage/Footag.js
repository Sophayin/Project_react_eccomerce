import React from 'react'
import { Grid, Typography, Container, Button } from '@mui/material'
import { height } from '@mui/system'
import '../product/product.css'
import Footaginfo from './Footaginfo'
import { BorderBottom } from '@mui/icons-material'


function Footage() {
  return (
    // <div>
    //     <Grid container spacing={2} sx={{ bgcolor:'black', height: '50vh', widht: '100%', marginTop: '35px'}}>
    //          <Grid item xs={12} sx={{display: 'flex'}}>
    //               <Grid item xs={3}>
    //                   <Typography variant='h6' style={{ color: 'white', BorderBottom:'solid 1px gray' }}>
    //                     Hello
    //                   </Typography>
    //               </Grid>
    //               <Grid item xs={3}>
    //                   <Typography variant='h6' style={{ color: 'white' }}>
    //                     Hello
    //                   </Typography>
    //               </Grid>
    //               <Grid item xs={3}>
    //                   <Typography variant='h6' style={{ color: 'white' }}>
    //                     Hello
    //                   </Typography>
    //               </Grid>
    //               <Grid item xs={3}>
    //                   <Typography variant='h6' style={{ color: 'white' }}>
    //                     Hello
    //                   </Typography>
    //               </Grid>
    //          </Grid>
    //     </Grid>
    // </div>
  <>
    {/* <div className='Footage'>
      <Grid container xs={12} sm={12} md={12} lg={12} sx={{ bgcolor: 'black', height: '50vh', }} spacing={2}>
        
          <div className='subcatainer'>
              <Grid item xs={12} sm={3} md={3} lg={3} className="subfootage">
                <Grid container sx={{ bgcolor: 'black', height: '30vh', margin:'15px 0 0 185px', width: '1150px'  }} spacing={2}>
                  <Grid item xs={3}>
                      <Typography variant='h6' style={{ borderBottom: 'solid 1px gray', color: 'white', margin: '15px 0 0 1px', }} className="contactinfo">
                        Contact Info
                      </Typography>
                    
                      <Typography component='p' style={{ color: 'white', margin: '9px 0 0 1px', fontSize: '15px' }}>
                          Address: N10A St 598, Boeung Kak2, Toul Kork, Phnom Penh
                      </Typography>
                      <Typography component='p' style={{ color: 'white', margin: '5px 0 0 1px', fontSize: '15px' }}>
                          Phone: 090569489
                      </Typography>
                      <Typography component='p' style={{ color: 'white', margin: '5px 0 0 1px', fontSize: '15px' }}>
                        Email: Yinsovannvathana@gmail.com
                      </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                      <Typography variant='h6' style={{ borderBottom: 'solid 1px gray', color: 'white', margin: '15px 0 0 15px' }} className="contactinfo">
                        Customer Support
                      </Typography>
                      <Typography component='p' style={{ color: 'white', margin: '9px 0 0 15px', fontSize: '15px' }}>
                          facebook page
                      </Typography>
                      <Typography component='p' style={{ color: 'white', margin: '2px 0 0 15px', fontSize: '15px' }}>
                          Telegram: 090569489
                      </Typography>
                      <Typography component='p' style={{ color: 'white', margin: '4px 0 0 15px', fontSize: '15px' }}>
                          Instagram: Yin unfortunate
                      </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                      <Typography variant='h6' style={{ borderBottom: 'solid 1px gray', color: 'white', margin: '15px 0 0 15px' }} className="contactinfo">
                        We accept
                      </Typography>
                      <Typography component='p' style={{ color: 'white', margin: '9px 0 0 15px', fontSize: '15px' }}>
                          ABA
                      </Typography>
                      <Typography component='p' style={{ color: 'white', margin: '2px 0 0 15px', fontSize: '15px' }}>
                          Aceleda
                      </Typography>
                      <Typography component='p' style={{ color: 'white', margin: '4px 0 0 15px', fontSize: '15px' }}>
                          Cash on Delivery
                      </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                      <Typography variant='h6' style={{ borderBottom: 'solid 1px gray', color: 'white', margin: '15px 0 0 15px' }} className="contactinfo">
                        My account
                      </Typography>
                      <Typography component='p' style={{ color: 'white', margin: '9px 0 0 15px', fontSize: '15px' }}>
                          Click here to create an account
                      </Typography>
                  </Grid>
                </Grid>
              </Grid>
          </div>
      </Grid>
    </div>  */}
 
    <Typography component='div' sx={{ bgcolor :' Black', minHeight: '40vh', color: 'white', mt: '25px'} }>
      <Container >
        <Grid container >
            <Grid xs={12} sm={12} md={3} lg={ 3}  sx={{ mt: '50px' }}>
              <Typography sx={{ borderBottom: '1px solid gray', mr:'20px' }}>
                Contact Info
              </Typography>
              <Typography>
                Address: 
              </Typography>
              <Typography>
                Phone :
              </Typography>
              <Typography>
                Emails:
              </Typography>
              <Typography>
                <img src='https://content-asset.phsar121.com/products/hh7EvJBVEEOxOLJXKHje3LpKInv7Q4hJP9ZjhzcG.png' className='footlogo'/>
              </Typography>
              <Typography>
                <input placeholder=' email...'/> <Button> Subscribe</Button>
              </Typography>
            </Grid>
            <Grid xs={12} sm={12} md={3} lg={ 3}  sx={{ mt: '50px' }}>
              <Typography sx={{ borderBottom: '1px solid gray', mr: '20px'}}>
                Customer Support
              </Typography>
              <Typography>
                Term & condition
              </Typography>
              <Typography>
                Return Policy
              </Typography>
              <Typography>
                Delivery Policy
              </Typography>
              <Typography>
                Privacy Policy
              </Typography>
              <Typography sx={{ borderBottom: '1px solid gray', mr: '20px'}}>
                Meet us on
              </Typography>
              <Typography>
                facebook, IG, Telegram
              </Typography>
            </Grid>
            <Grid xs={22} sm={22} md={3} lg={ 3}  sx={{ mt: '50px' }}>
              <Typography sx={{ borderBottom: '2px solid gray', mr: '20px'}} >
                We accept
              </Typography>
              <Typography>
                ABA, ACELEDA, WING,Master CARD, VISA CARD
              </Typography>
            </Grid>
            <Grid xs={12} sm={12} md={3} lg={ 3}  sx={{ mt: '50px' }}>
              <Typography sx={{ borderBottom: '1px solid gray', mr: '20px'}} >
                My account
              </Typography>
              <Typography>
                Log out
              </Typography>
              <Typography>
                Order History
              </Typography>
              <Typography>
                My wishlist
              </Typography>
              <Typography>
                Track Order
              </Typography>
              <Typography sx={{ borderBottom: '1px solid gray', mr: '20px'}}>
                Be a Merchant 
              </Typography>
              <Button>
                Apply Now
              </Button>
            </Grid>
        </Grid>
      </Container>
    </Typography>
  </>
  
  )
}

export default Footage