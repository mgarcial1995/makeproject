import ServiceCard from "./ServiceCard";
import React from "react";


const ServicesList = (props) => {
    const {services} = props;
    console.log(services);
    return (
      <React.Fragment>
          {services.map((service) => (
            <ServiceCard 
              key={ service.id }
              service={service}/>
          ))}
      </React.Fragment>
     
      );
      
}

export default ServicesList;