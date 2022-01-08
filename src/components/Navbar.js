import { Link } from 'react-router-dom';
{/* <Link to={route.url}>{route.name}</Link> */}
const Navbar = (props) => {
    const {routes} = props
    console.log(routes)

    return (
      <div className="navbar">
        <img className="logo" src="http://www.emilyridge.ie/wp-content/themes/skeleostrnge/lib/img/logo-web-developer-emily-ridge.png" />
        <ul className="navbar_list">
            {/* <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/resources"}>Resources</Link></li> */}
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
  