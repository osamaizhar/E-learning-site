import axios from "axios";
import { Col, Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function DataForm() {
  const submitExercise = (e) => {
    e.preventDefault();
    const data = {
      name: e.target[0].value,
      description: e.target[1].value,
      duration: e.target[2].value,
      type_of_excercise: e.target[3].value,
    };
    // axios.post("http://localhost:4000/user/save-excercise", data)
    axios
      .post("http://localhost:4000/user/save-excercise", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Container>
      <Col lg={8} className="m-auto">
        <Form onSubmit={submitExercise}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Description" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Duration</Form.Label>
            <Form.Control type="number" placeholder="Enter Duration" />
          </Form.Group>
          <Form.Label>Type of excercise</Form.Label>

          <Form.Select aria-label="Default select example" className="mb-3">
            <option>Select exercise</option>
            {["run", "bicycle ride", "swim", "walk", "hike"].map(
              (item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              }
            )}
          </Form.Select>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Container>
  );
}

export default DataForm;
