import { useState } from "react";
import ProjectLayout from "../layouts/ProjectLayout/ProjectLayout";
import Card from "../components/ProjectItems/Card/Card";
import genser from "../assets/genser.png"
import './view.scss'
import CardPopup from "../components/ProjectItems/CardPopup/CardPopup";
import monkon from '../assets/monkon.png'
import { Grid } from "@mui/material";
import { ProjectItem } from "../components/ProjectItems/ProjectTypes";
import ProjectRow from "../components/ProjectItems/ProjectRow/ProjectRow";



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

    const tests1 = [test1, test1, test1]
    const tests2 = [test2, test2, test2]
    
    return (
        <ProjectLayout>
            <ProjectRow items={tests1} category={"Gensere"} />
            <ProjectRow items={tests2} category={"Vester"} />
            <ProjectRow items={tests2} category={"Vesker"} />
        </ProjectLayout>
    );
}

export default ProjectView;