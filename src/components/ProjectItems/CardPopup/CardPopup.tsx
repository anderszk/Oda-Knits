import React from 'react';

import genser from '../../../assets/genser.png'

import './CardPopup.scss';
import {
  Box,
  Fade,
  Typography,
  Grid,
  useTheme,
  Modal,
  Link,
  Icon
} from '@mui/material';

interface CardPopupProps {
    popupContent: any;
    isOpen: boolean;
    setIsOpen: () => void;
}
const CardPopup : React.FC<CardPopupProps> = ({ popupContent, isOpen, setIsOpen }) => {
  const theme = useTheme();

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
      <Fade in={isOpen} timeout={500}>
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
                    background: `url(${genser})`,
                    backgroundSize: 'contain',
                    backgroundRepeat:'no-repeat',
                    backgroundColor:'var(--background-tertiary)',
                    borderRadius: 8}}
                >
                    <Box sx={{height: '100%'}}>
                        <p>Heisann</p>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12} sx={{backgroundColor:'var(--background-secondary)', borderRadius: 8}}>
                    <Box sx={{height: '100%'}}>
                        <p>Heisann</p>
                    </Box>
                </Grid>
            </Grid>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CardPopup;


