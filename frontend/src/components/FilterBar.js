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
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import btnStyles from "../styles/Button.module.css";

const FilterBar = ({ setSearchTerm, onRadioChange }) => {
  const [searchInput, setSearchInput] = useState("");
  const [radioValue, setRadioValue] = useState("1");

  const radioOptions = [
    { name: "All", value: "1" },
    { name: "Liked", value: "2" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput.trim());
  };

  const handleRadioChange = (value) => {
    setRadioValue(value);
    onRadioChange(value);
  };

  return (
    <Row className={styles.FilterBar}>
      <Col sm={4}>
        <Form className="d-flex" onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="E.g. funky nails"
            className="me-2 rounded-pill"
            aria-label="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button
            className="rounded-pill"
            variant="outline-secondary"
            type="submit"
          >
            Search
          </Button>
        </Form>
      </Col>
      <Col sm={4}>
        <ButtonGroup toggle>
          {radioOptions.map((option) => (
            <ToggleButton
              key={option.value}
              type="radio"
              variant="outline-secondary"
              name="radio"
              value={option.value}
              checked={radioValue === option.value}
              onChange={() => handleRadioChange(option.value)}
            >
              {option.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Col>
      <Col sm={4}>
        <Link to="/gallery/create">
          <Button
            className={`${btnStyles.Button} ${btnStyles.Bright} ${btnStyles.Wide}`}
          >
            [+] upload
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default FilterBar;
