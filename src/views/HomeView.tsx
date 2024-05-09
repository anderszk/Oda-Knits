import MainLayout from "../layouts/MainLayout/MainLayout";
import monkon from '../assets/monkon.png'
import './view.scss'

const HomeView = () => {
  return (
    <MainLayout>
        <p className="quote">"I like knitting stuff!" - <span style={{fontWeight:'600', fontSize:'.9em'}}>Dooda</span></p>
    </MainLayout>
  );
}

export default HomeView;