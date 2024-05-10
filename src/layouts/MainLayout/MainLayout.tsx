
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import './MainLayout.scss'
import Typewriter from 'typewriter-effect';
import { PiYarn } from "react-icons/pi";
import { motion } from "framer-motion";
import { useRef } from 'react';



const MainLayout = ({ children } : {children: any}) => {
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const mainRef = useRef<null | HTMLDivElement>(null);


  const scrollToView = () => {
    mainRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    <div className="main-layout-container" style={{paddingTop: isMobile ? 'calc(4rem + 56px)' : 'calc(4rem + 56px + 56px)'}}>
      <div className='main-landing' style={{display:'flex', flexDirection:'column' ,alignItems: isMobile ? 'start' : 'center'}}>
        <Typography mt={2} variant='h1' sx={{fontSize: {xs:'3rem', md:'4rem'}, fontWeight: '500', color: 'var(--text-primary)'}}>Hello, I am Oda Knits!</Typography>
        <Box mt={12}>
          <Typewriter
            options={{
              strings: ["I like knitting stuff!", "Follow me on instagram @oda.knits_", "Take a look at my projects for inspo!", "Click the yarn ball to see more!"],
              autoStart: true,
              loop: true,
              wrapperClassName: 'typewriter',
              cursorClassName: 'typewriter_cursor'
            }}
            onInit={(typewriter) => {
              typewriter.typeString('I Like knitting stuff!')
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
        </Box>
        <Box className='main-scrolldown-container' sx={{top: {xs:'75vh', md:'82vh'}}}>
          <motion.button 
          style={{fontSize: isMobile ? '2.5em' : '3em'}}
          whileHover={{
            rotate: 90,
            transition: { duration: .2 },
          }}
          whileTap={{ scale: 0.80, transition: {duration: .1} }}
          onClick={scrollToView}
            className='main-scrolldown'>
            <PiYarn />
          </motion.button>
        </Box>
      </div>
      <div className='main-content' ref={mainRef}>
        {children}
      </div>
    </div>
  );
}

export default MainLayout;