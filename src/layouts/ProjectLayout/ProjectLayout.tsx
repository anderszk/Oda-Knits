import { Typography, useMediaQuery, useTheme } from '@mui/material';
import './ProjectLayout.scss'
import { useLayoutEffect } from 'react';

const ProjectLayout = ({children} : {children: any}) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  useLayoutEffect(() => {
    document.title = 'Oda Knits - Projects';
  }, []);

  return (
    <div className="project-layout-container" style={{paddingTop: isMobile ? 'calc(4rem + 56px)' : 'calc(4rem + 56px + 56px)'}}>
      <Typography variant='h1' sx={{fontSize: {xs:'3rem', md:'4rem'}, fontWeight: '500', color: 'var(--text-primary)'}}>My Projects.</Typography>
      <div className='project-content'>
        {children}
      </div>
    </div>
  );
}

export default ProjectLayout;