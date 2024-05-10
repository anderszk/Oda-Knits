import ContactLayout from "../layouts/ContactLayout/ContactLayout"

import './view.scss'
import { Grid, Typography } from "@mui/material"


const ContactView = () => {
  return (
    <ContactLayout>
      <Grid container>
        <Grid item xs={12} md={6} display={'flex'} alignItems={'center'} justifyContent={{xs:'center', md:'start'}}>
          <Typography pb={12} variant='h1' sx={{fontSize: {xs:'3rem', md:'4rem'}, fontWeight: '500', color: 'var(--text-primary)'}}>Contact me!</Typography>
        </Grid>
        <Grid item xs={12} md={6} display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <p>Heisan</p>
          <p>Heisan</p>
          <p>Heisan</p>
          <p>Heisan</p>
          <p>Heisan</p>
          <p>Heisan</p>
          <p>Heisan</p>
        </Grid>
      </Grid>
    </ContactLayout>
  );
}

export default ContactView;