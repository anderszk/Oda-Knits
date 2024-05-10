import { createRef, useRef, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { ProjectItem, ProjectItemRow } from "../components/ProjectItems/ProjectTypes";

import './view.scss'
import ProjectLayout from "../layouts/ProjectLayout/ProjectLayout";
import ProjectRow from "../components/ProjectItems/ProjectRow/ProjectRow";

import genser from "../assets/genser.png"
import monkon from '../assets/monkon.png'
import { motion } from "framer-motion";



const ProjectView = () => {

    const test1 : ProjectItem= {
        title: "Anders & Monkon",
        description: "En guling og en ape som koser seg i solen",
        thumbnail: monkon
    }

    const test2 : ProjectItem = {
        title: "Genser",
        description: "En nydelig fargerik genser som varmer på vinteren",
        thumbnail: genser
    }

    const testRow1: ProjectItemRow = {
        items: [test1, test1, test1],
        title: "Sweaters"
    }

    const testRow2: ProjectItemRow = {
        items: [test1, test1, test1],
        title: "Tops"
    }

    const testRow3: ProjectItemRow = {
        items: [test1, test1, test1],
        title: "Cardigans"
    }

    const testRow4: ProjectItemRow = {
        items: [test1, test1, test1],
        title: "Accessories"
    }

    const mapableProjects = [testRow1, testRow2, testRow3, testRow4]

    const headingRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
    headingRefs.current = mapableProjects.map((_, index) =>
        headingRefs.current[index] ?? createRef<HTMLDivElement>()
    );

    const scrollToHeading = (index: number) => {
        if (headingRefs.current[index].current) {
            headingRefs.current[index].current!.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    
    return (
        <ProjectLayout>
            <Grid container pb={10}>
                <Grid item xs={12} md={6}>
                    <Typography variant='h1' sx={{fontSize: {xs:'3rem', md:'4rem'}, fontWeight: '500', color: 'var(--text-primary)'}}>My Projects:</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                   <Box mt={{xs: 0, md: 2}} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', gap: 2 }}>
                       {mapableProjects.map((item, index) => {
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const [hover, setHover] = useState(false); // State to manage hover
                            return (
                            <Box
                                key={index}
                                sx={{ position: 'relative', display: 'inline-block' }}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                            >
                                <Button
                                variant="contained"
                                onClick={() => scrollToHeading(index)}
                                className="project-menu-buttons"
                                >
                                Go to {item.title}
                                </Button>
                                <motion.div
                                className="underline"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: hover ? 1 : 0 }} // Animate based on hover state
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                style={{ position: 'absolute', width: '100%', bottom: 0, left: 0, borderRadius:'100px', height: '2px', backgroundColor: 'var(--text-primary)', originX: 0 }}
                                />
                            </Box>
                            );
                        })}
                    </Box>
                </Grid>
            </Grid>
            <div className='project-content'>
                {mapableProjects.map((item, index) => (
                    <div ref={headingRefs.current[index]} key={index}>
                        <ProjectRow items={item.items} category={item.title} />
                    </div>
                ))}
            </div>
        </ProjectLayout>
    );
}

export default ProjectView;