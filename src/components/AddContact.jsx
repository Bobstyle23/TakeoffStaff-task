import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const handleSubmit = (e) => {
  e.preventDefault();
};
const AddContact = () => {
  return (
    <div>
      <Container
        style={{
          width: "50%",
          marginTop: "5rem",
          background: "#f5f5f5",
          marginBottom: "5rem",
          padding: "1rem",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="number" placeholder="Enter phone number" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter city" />
          </Form.Group>

          <Button variant="primary" type="submit" disabled>
            Add
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddContact;
