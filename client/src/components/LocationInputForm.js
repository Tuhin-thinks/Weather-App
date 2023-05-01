import axios from "axios";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { TemperatureView } from "./TemperatureView";

const LocationInputForm = () => {
  const [location, setLocation] = useState("");
  const [weatherResponse, setWeatherResponse] = useState({});

  const handleLocaltionQuery = (e) => {
    e.preventDefault();
    console.log("location:", location);
    axios.get("/api/getMaxMinTemperature/" + location).then((response) => {
      setWeatherResponse(response.data);
      console.log(response.data);
    });
  };

  return (
    <Container>
      <Form onSubmit={handleLocaltionQuery}>
        <Form.Group controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter location"
            onBlur={(e) => setLocation(e.target.value)}
          />
          <Form.Text className="text-muted">
            Enter a location to get the max and min temperature.
          </Form.Text>
          <div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form.Group>
      </Form>
      <TemperatureView {...weatherResponse} />
    </Container>
  );
};

export default LocationInputForm;
