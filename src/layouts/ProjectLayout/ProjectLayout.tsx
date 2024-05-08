import './ProjectLayout.scss'

const ProjectLayout = ({children} : {children: any}) => {
  return (
    <div className="project-layout-container">
       <h1>My Projects.</h1>
      <div className='project-content'>
        {children}
      </div>
    </div>
  );
}

export default ProjectLayout;