
import './MainLayout.scss'

const MainLayout = ({ children } : {children: any}) => {
  return (
    <div className="main-layout-container">
      <div className='main-landing'>
        <h1>Hello! I am Oda Knits!</h1>
        <p className="quote">"I like knitting stuff!" - <span style={{fontWeight:'600', fontSize:'.9em'}}>Dooda</span></p>
      </div>
      <div className='main-content'>
        {children}
      </div>
    </div>
  );
}

export default MainLayout;