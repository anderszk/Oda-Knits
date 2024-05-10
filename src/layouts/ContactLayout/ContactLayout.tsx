
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import './ContactLayout.scss'
import { useLayoutEffect } from 'react';

const ContactLayout = ({children} : {children:any}) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useLayoutEffect(() => {
    document.title = 'Oda Knits - Contact';
  }, []);

  return (
   <div className="contact-layout-container" style={{paddingTop: isMobile ? 'calc(4rem + 56px)' : 'calc(4rem + 56px + 56px)'}}>
      <Typography variant='h1' sx={{fontSize: {xs:'3rem', md:'4rem'}, fontWeight: '500', color: 'var(--text-primary)'}}>Contact me!</Typography>
      <div className='contact-content'>
        {children}
      </div>
    </div>
  );
}

export default ContactLayout;