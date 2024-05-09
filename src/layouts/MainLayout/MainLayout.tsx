
import './MainLayout.scss'

const MainLayout = ({ children } : {children: any}) => {
  return (
    <div className="main-layout-container">
       <h1>Hello! I am Oda Knits!</h1>
      <div className='main-content'>
        {children}
      </div>
    </div>
  );
}

export default MainLayout;