const ServiceCard = (props) => {
  const { photo, title, description } = props.service;  
  console.log("Prop: ", props); 
    return (
        <div className="service-card">
          <div className="image">
            <img src={ photo !== '' ? photo : 'https://via.placeholder.com/400' } alt="" />
          </div>
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
      );
} 


export default ServiceCard;