import React from 'react';

import './CardPopup.scss';
import {
  Box,
  Fade,
  Typography,
  Grid,
  Modal,
} from '@mui/material';

interface CardPopupProps {
    popupContent: any;
    category: string;
    isOpen: boolean;
    setIsOpen: () => void;
}
const CardPopup : React.FC<CardPopupProps> = ({ popupContent, isOpen, setIsOpen, category }) => {

  return (
    <Modal
      disableAutoFocus
      open={isOpen}
      onClose={setIsOpen}
      closeAfterTransition
      sx={{
        px: { xs: 2, md: 0 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(6px)',
        border: 'none'
      }}>
      <Fade in={isOpen} timeout={600}>
        <Box
          sx={{
            height: {xs:'80vh', md:'70vh'},
            width: {xs:'85vw', md:'65vw'},
            zIndex: 100,
            bgcolor: 'var(--background-secondary)',
            borderRadius: 8,
            overflow: 'hidden',
            overflowY: 'scroll',
            '::-webkit-scrollbar': {
              display: 'none'
            },
            '-ms-overflow-style': 'none'
          }}>
            <Grid container display={'flex'} sx={{height: '100%'}}>
                <Grid item md={6} xs={12} sx={{
                    height:'100%',
                    width:'100%',
                    background: `url(${popupContent.thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundRepeat:'no-repeat',
                    backgroundColor:'var(--background-tertiary)',}}
                >
                </Grid>
                <Grid item md={6} xs={12} sx={{backgroundColor:'var(--background-secondary)', borderRadius: 8}}>
                    <Box py={6} px={{xs:4, md:6}}>
                        <Typography variant='body1' fontSize={{xs:'.9rem', md:'0.9rem'}}>
                          {category} / Size {popupContent.size}
                        </Typography>
                        <Typography variant='h1' fontSize={{xs:'2rem', md:'2.2rem'}} fontWeight={{xs:400, md:500}} pt={{xs:.5, md:.5}} pb={{xs:2, md:3}}>
                          {popupContent.title}
                        </Typography>
                        <Typography variant='body1' fontSize={{xs:'1rem', md:'1em'}}>
                          {popupContent.description}
                        </Typography>
                        <Grid container pt={{xs:6, md: 4}} display={"flex"} rowGap={{xs:5, md:3}}>
                          <Grid item xs={7} md={6}>
                            <Typography variant='body1' fontSize={{xs:'1rem', md:'0.9rem'}} fontWeight={600} pb={.5}>
                              Color Palette
                            </Typography>
                            <Typography variant='body1' fontSize={{xs:'.9rem', md:'0.8rem'}} fontWeight={400}>
                              Red
                            </Typography>
                          </Grid>
                          <Grid item xs={5} md={6}>
                            <Typography variant='body1' fontSize={{xs:'1rem', md:'0.9rem'}} fontWeight={600} pb={.5}>
                              Yarn Type
                            </Typography>
                            <Typography variant='body1' fontSize={{xs:'.9rem', md:'0.9rem'}} fontWeight={400}>
                              {popupContent.yarn_type}
                            </Typography>
                          </Grid>
                          <Grid item xs={7} md={6}>
                            <Typography variant='body1' fontSize={{xs:'1rem', md:'0.9rem'}} fontWeight={600} pb={.5}>
                              Needle Size
                            </Typography>
                            <Typography variant='body1' fontSize={{xs:'.9rem', md:'0.9rem'}} fontWeight={400}>
                              {popupContent.yarn_type}
                            </Typography>
                          </Grid>
                          <Grid item xs={5} md={6}>
                            <Typography variant='body1' fontSize={{xs:'1rem', md:'0.9rem'}} fontWeight={600} pb={.5}>
                              Gauge
                            </Typography>
                            <Typography variant='body1' fontSize={{xs:'.9rem', md:'0.9rem'}} fontWeight={400}>
                              {popupContent.yarn_type}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography variant='body1' fontSize={{xs:'1rem', md:'0.9rem'}} fontWeight={600}  pb={.5}>
                              Knitting Recipe
                            </Typography>
                            <Typography variant='body1' fontSize={{xs:'.9rem', md:'0.9rem'}} fontWeight={400}>
                              {popupContent.yarn_type}
                            </Typography>
                          </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CardPopup;


