
import { Box, Typography } from '@mui/material';
import './MainLayout.scss'

import Typewriter from 'typewriter-effect';

const MainLayout = ({ children } : {children: any}) => {

  
  return (
    <div className="main-layout-container">
      <div className='main-landing'>
        <Typography variant='h1' sx={{fontSize: {xs:'3rem', md:'4rem'}, fontWeight: '500'}}>Hello! I am Oda Knits!</Typography>
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
      </div>
      <div className='main-content'>
        {children}
      </div>
    </div>
  );
}

export default MainLayout;