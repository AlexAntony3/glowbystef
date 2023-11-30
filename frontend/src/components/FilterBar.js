import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Form,
  Row,
  ToggleButton,
} from "react-bootstrap";
import styles from "../styles/FilterBar.module.css";

const FilterBar = ({ setSearchTerm }) => {
  const [term, setTerm] = useState("");
  const radioOptions = [
    { name: "All", value: "1" },
    { name: "Liked", value: "2" },
    { name: "My Uploads", value: "3" },
  ];
  const [radioValue, setRadioValue] = useState("1");

  return (
    <Row className={styles.FilterBar}>
      <Col sm={4}>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="E.g. funky nails"
            className="me-2 rounded-pill"
            aria-label="Search"
            onChange={(event) => setTerm(event.target.value)}
          />
          <Button
            className="rounded-pill"
            variant="outline-secondary"
            onClick={() => term && setSearchTerm(term)}
          >
            Search
          </Button>
        </Form>
      </Col>

      <Col>
        <ButtonGroup toggle>
          {radioOptions.map((option, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="secondary"
              name="radio"
              value={option.value}
              checked={radioValue === option.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {option.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
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
