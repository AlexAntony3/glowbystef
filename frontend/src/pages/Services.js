import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { CardColumns, Container } from "react-bootstrap";
import appStyles from "../App.module.css";
import { axiosRes } from "../api/axiosDefaults";
import Asset from "../components/Asset";

const Services = () => {
  const [services, setServices] = useState([]);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    getServices();
  }, []);

  const getServices = async () => {
    try {
      const response = await axiosRes.get("/services/");
      setServices(response.data.results);
      setContentLoaded(true);
    } catch (err) {
      console.error(err);
      setServices([]);
      setContentLoaded(true);
    }
  };

  return (
    <Container className={`${appStyles.Content} p-4`}>
      <h1 className={appStyles.Header}>Our Services</h1>
      {contentLoaded ? (
        services.length > 0 ? (
          <CardColumns>
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                name={service?.name}
                description={service?.description}
                price={service?.price}
                image={service?.image}
                rating={service?.rating}
              />
            ))}
          </CardColumns>
        ) : (
          <Container className={`${appStyles.Content}`}>
            <Asset spinner />
          </Container>
        )
      ) : null}
    </Container>
  );
};

export default Services;
