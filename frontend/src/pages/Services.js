import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { CardColumns, Container } from "react-bootstrap";
import appStyles from "../App.module.css";
import { axiosRes } from "../api/axiosDefaults";
// import styles from "../../App.module.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    getServices();
  }, []);

  const getServices = async () =>
    await axiosRes
      .get("/services/")
      .then((response) => setServices(response.data.results))
      .catch((err) => setServices([]));

  return (
    <Container className={`${appStyles.Content} p-4 `}>
      <h1 className={appStyles.Header}>Our Services</h1>
      <CardColumns>
        {services.map((service, index) => {
          return (
            <ServiceCard
              key={service.id}
              name={service?.name}
              description={service?.description}
              price={service?.price}
              image={service?.image}
              rating={service?.rating}
            />
          );
        })}
      </CardColumns>
    </Container>
  );
};

export default Services;
