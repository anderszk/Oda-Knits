
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import './MainLayout.scss'
import Typewriter from 'typewriter-effect';
import { PiYarn } from "react-icons/pi";
import { motion } from "framer-motion";



const MainLayout = ({ children } : {children: any}) => {
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <div className="main-layout-container">
      <div className='main-landing'>
        <Typography variant='h1' sx={{fontSize: {xs:'3rem', md:'4rem'}, fontWeight: '500'}}>Hello, I am Oda Knits!</Typography>
        <Box mt={15}>
          <Typewriter
            options={{
              strings: ["I Like knitting stuff!", "Follow me on instagram @ Oda.knits_!", "Take a look at my projects for inspo!"],
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
        <Box className='main-scrolldown-container'>
          <motion.button 
          style={{fontSize: isMobile ? '2.5em' : '3em'}}
          whileHover={{
            rotate: 120,
            transition: { duration: .2 },
          }}
            className='main-scrolldown'>
            <PiYarn />
          </motion.button>
        </Box>
      </div>
      <div className='main-content'>
        {children}
      </div>
    </div>
  );
}

export default MainLayout;