import "./styles.sass";
const Home = () => {
  return (
    <div>
      <div className="home">
        <h2>Freelance Web Designer & Developer based in Galway, Ireland.</h2>
        <h2>
          Highly experienced in designing & developing custom Wordpress
          websites.
        </h2>
      </div>
      <div className="container-1">
        <div className="container-1-images">
          <img
            className="container-1-images-1"
            src="http://www.emilyridge.ie/wp-content/uploads/freelance-web-designer-in-galway.png"
            alt="Freelance Web Designer Galway, Ireland"
            title="Freelance Web Designer Galway, Ireland"
            scale="0"
          />
          <img
            className="container-1-images-2"
            src="http://www.emilyridge.ie/wp-content/uploads/freelance-web-designer-emily-ridge.png"
            alt=""
            title=""
            scale="0"
          ></img>
          <img
            className="container-1-images-3"
            src="http://www.emilyridge.ie/wp-content/uploads/freelance-web-designer-in-ireland.png"
            alt="Example website from Freelance Web Designer in Dublin on iPhone or Smartphone"
            title="Example website from Freelance Web Designer in Dublin on iPhone or Smartphone"
            scale="0"
          ></img>
          <h3>Fully responsive, custom designed Wordpress CMS websites</h3>
          <button className="container-1-images-portafolio">View portafolio</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
