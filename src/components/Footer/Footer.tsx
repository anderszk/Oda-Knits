
import { Link, NavLink, redirect, useNavigate } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import logo from "../../assets/logo.png"
import './Footer.scss'


const Footer = () => {

  const navigate = useNavigate();


  return (
    <Box className="footer-container" sx={{height: {xs:'25vh', md: '25vh'}}}>
        <Grid container sx={{height:'calc(100% - 40px)'}}>
          <Grid item md={2} xs={6}>
            <Box className="footer-logo" onClick={() => navigate("/")}>
              <img src={logo} className='footer-logo-image'/>
            </Box>
          </Grid>
          <Grid item md={10} xs={6}>

          </Grid>
        </Grid>
        <Box className="footer-creds"> Designed and implemented by Kristensen Solutions © 2024</Box>
    </Box>
  );
}

export default Footer;


