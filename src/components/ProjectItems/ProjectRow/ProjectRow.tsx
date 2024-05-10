import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ProjectRow.scss';
import { ProjectItem } from '../ProjectTypes';
import { Box, Grid, Typography } from '@mui/material';
import Card from '../Card/Card';
import CardPopup from '../CardPopup/CardPopup';

interface CardProps {
  category: string;
  items: ProjectItem[];
}

const ProjectRow: React.FC<CardProps> = ({ items, category }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Box pt={30} sx={{ height: { xs: '220vh', md: '80vh' } }}>
        <Typography
          variant='h2'
          mb={{xs: 10, md: 8}}
          sx={{
            textAlign: {xs: 'center', md:'left'},
            fontSize: { xs: '2.5em', md: '3em' },
            fontStyle: 'italic',
            fontWeight: '400',
            color: 'var(--text-primary)'
          }}
        >
          {category}
        </Typography>
      <Grid container spacing={{xs: 8, md:5}}>
        {items.map((item: ProjectItem, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card cardInfo={item} onClick={showModal} />
          </Grid>
        ))}
      </Grid>
      <CardPopup popupContent={undefined} isOpen={isOpen} setIsOpen={closeModal}></CardPopup>
    </Box>
  );
};

export default ProjectRow;
