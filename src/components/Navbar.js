import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const Navbar = (props) => {
    const {routes} = props
    console.log(routes)

    return (
      <div className="navbar">
        <img className="logo" src="http://www.emilyridge.ie/wp-content/themes/skeleostrnge/lib/img/logo-web-developer-emily-ridge.png" alt="Logo" />
        <ul className="navbar_list">
            {
                routes.map((el,index)=>{
                    return <li key={index}>
                        <Link className="navbar_list_element" to={el.url}>{el.name}</Link>
                    </li>
                })
            }
          
        </ul>
      </div>
    );
  };
  
  export default Navbar;
  