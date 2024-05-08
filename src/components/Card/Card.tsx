
import './Card.scss'

interface CardProps {
    title: string;
    desc: string;
    img: string;
    onClick: () => void;
}

const Card : React.FC<CardProps> = ({title, desc, img}) => {
  return (
    <div className="card-container" onClick={() => onclick}>
        <div className='card-image-container'>
            <img src={img} alt='genser' className='card-image'/>
        </div>
        <div className='card-info'>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    </div>
  );
}

export default Card;