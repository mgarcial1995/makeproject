import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faGooglePlusSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  const { routes } = props;
  return (
    <footer>
      <div className="icons">
        <FontAwesomeIcon icon={faFacebookSquare} size='2x' />
        <FontAwesomeIcon icon={faTwitterSquare} size='2x' />
        <FontAwesomeIcon icon={faGooglePlusSquare} size='2x' />
      </div>
      <ul className='routes'>
        {routes.map((el, index) => {
          return (
            <li key={index}>
              <Link className='routes_elements' to={el.url}>
                {el.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className='details'>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Terms & Conditions</li>
      </ul>
      <p className='copyright'>
        Copyright © 2022 Emily Ridge • Galway based Freelance Web Designer &
        Developer
      </p>
    </footer>
  );
};

export default Footer;
