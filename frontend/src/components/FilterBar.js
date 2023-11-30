import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "../styles/FilterBar.module.css";

const FilterBar = () => {
  return (
    <Row className={styles.FilterBar}>
      <Col sm={4}>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="E.g. funky nails"
            className="me-2 rounded-pill"
            aria-label="Search"
          />
          <Button className="rounded-pill" variant="outline-secondary">
            Search
          </Button>
        </Form>
      </Col>

      <Col>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button>Search</Button>
        </Form>
      </Col>
      <Col>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button>Search</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default FilterBar;
