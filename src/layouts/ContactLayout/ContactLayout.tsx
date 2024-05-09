
import './ContactLayout.scss'

const ContactLayout = ({children} : {children:any}) => {
  return (
   <div className="contact-layout-container">
       <h1>Contact me!</h1>
      <div className='contact-content'>
        {children}
      </div>
    </div>
  );
}

export default ContactLayout;