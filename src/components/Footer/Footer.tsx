
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
          <Grid item md={8} xs={6}>

          </Grid>
          <Grid item md={2} xs={6} sx={{display:'flex', flexDirection:'column', gap:'15px', justifyContent:'center'}}>
            <NavLink to="/" className={({isActive}) => isActive ? "footer-link-active" : "footer-link"}>Home</NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? "footer-link-active" : "footer-link"}>Projects</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "footer-link-active" : "footer-link"}>Contact</NavLink>
          </Grid>
        </Grid>
        <Box className="footer-creds">Implemented by Kristensen Solutions © 2024</Box>
    </Box>
  );
}

export default Footer;


