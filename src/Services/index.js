import ServicesList from "../components/ServicesList";
import './styles.sass';

const Services = () => {
  const servicios = [
    {
      id: 1,
      photo:
        "http://www.emilyridge.ie/wp-content/uploads/galway-website-design.png",
      title: "Website Design",
      description:
        "Our approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.",
    },
    {
      id: 2,
      photo:
        "http://www.emilyridge.ie/wp-content/uploads/galway-wordpress-theme-development.png",
      title: "Custom WordPress Theme Development",
      description:
        "Wordpress CMS is a user-friendly administrative area allowing you to easily edit your website's content.",
    },
    {
      id: 3,
      photo:
        "http://www.emilyridge.ie/wp-content/uploads/galway-wordpress-training-tutoring.png",
      title: "Wordpress Training & Tutoring",
      description:
        "We offer customised WordPress training to ensure you are confident in updating and maintaining your WordPress website.",
    },
  ];
  return (
    <div className="services-container">
      <ServicesList services={servicios} />
      
    </div>
  );
};

export default Services;
