import { useState } from "react";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ProjectLayout from "../layouts/ProjectLayout/ProjectLayout";
import Card from "../components/Card/Card";
import genser from "../assets/genser.png"



const ProjectView = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    
    return (
        <ProjectLayout>
            <Card title={"Title"} desc={"Description of knitwear"} img={genser} onClick={showModal} />
            <Card title={"Title"} desc={"Description of knitwear"} img={genser} onClick={showModal} />
            <Card title={"Title"} desc={"Description of knitwear"} img={genser} onClick={showModal} />
            <Card title={"Title"} desc={"Description of knitwear"} img={genser} onClick={showModal} />
            <Card title={"Title"} desc={"Description of knitwear"} img={genser} onClick={showModal} />
            <Card title={"Title"} desc={"Description of knitwear"} img={genser} onClick={showModal} />
            <Card title={"Title"} desc={"Description of knitwear"} img={genser} onClick={showModal} />
            <Card title={"Title"} desc={"Description of knitwear"} img={genser} onClick={showModal} />
        </ProjectLayout>
    );
}

export default ProjectView;