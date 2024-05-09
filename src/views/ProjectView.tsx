import { useState } from "react";
import ProjectLayout from "../layouts/ProjectLayout/ProjectLayout";
import Card from "../components/Card/Card";
import genser from "../assets/genser.png"
import './view.scss'
import CardPopup from "../components/CardPopup/CardPopup";
import monkon from '../assets/monkon.png'
import { Grid } from "@mui/material";



const ProjectView = () => {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false)
    }
    
    return (
        <>
        <ProjectLayout>
            <Grid container spacing={5} sx={{rowGap:'50px'}}>
                <Grid item xs={12} sm={6} md={4}><Card title={"Title"} desc={"Description of knitwear"} img={genser} onClick={showModal} /></Grid>
                <Grid item xs={12} sm={6} md={4}> <Card title={"Title"} desc={"Description of knitwear"} img={monkon} onClick={showModal} /></Grid>
                <Grid item xs={12} sm={6} md={4}><Card title={"Title"} desc={"Description of knitwear"} img={genser} onClick={showModal} /></Grid>
                <Grid item xs={12} sm={6} md={4}> <Card title={"Title"} desc={"Description of knitwear"} img={monkon} onClick={showModal} /></Grid>
                <Grid item xs={12} sm={6} md={4}><Card title={"Title"} desc={"Description of knitwear"} img={genser} onClick={showModal} /></Grid>
                <Grid item xs={12} sm={6} md={4}> <Card title={"Title"} desc={"Description of knitwear"} img={monkon} onClick={showModal} /></Grid>
                
            </Grid>
        </ProjectLayout>
        <CardPopup popupContent={undefined} isOpen={isOpen} setIsOpen={closeModal}></CardPopup>
        </>
    );
}

export default ProjectView;