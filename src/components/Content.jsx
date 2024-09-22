import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap";

export default function Content() {
  const [url, setUrl] = useState("");

  const onChange = (e) => {
    setUrl(e.target.value);
  };
  const handleSubmit = (e) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    e.preventDefault();
  
    axios
      .post(
        'https://api.tinyurl.com/create',
        {
          url: url,
          domain: 'tinyurl.com',
          description: 'Link description',
        },
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
      .then((response) => {
        console.log('Success:', response.data);
        setUrl("");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Card
        body
        className="my-2"
        style={{
          width: "18rem",
        }}
      >
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button color="primary">Go somewhere</Button>
      </Card>
      <img src="src/assets/illustration-working.svg" alt="" />

      <Form onSubmit={handleSubmit}>
        <Row className="row-cols-lg-auto g-3 align-items-center">
          <Col>
            <Label className="visually-hidden" for="url">
              URL
            </Label>
            <Input
              id="url"
              name="url"
              placeholder="URL"
              type="text"
              onChange={onChange}
              value={url}
            />
          </Col>
          <Col>
            <Button>Submit</Button>
          </Col>
        </Row>
      </Form>
      <div>
        <p>Advanced Statistic</p>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <Row className="justify-content-center">
        <Col md="4" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card 1 Title</CardTitle>
              <CardText>Card 1 Text</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" className="mb-4" style={{ marginTop: "20px" }}>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card 2 Title</CardTitle>
              <CardText>Card 2 Text</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" className="mb-4" style={{ marginTop: "40px" }}>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card 3 Title</CardTitle>
              <CardText>Card 3 Text</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Card
        body
        className="my-2"
        style={{
          width: "18rem",
        }}
      >
        <CardTitle tag="h5">Boost your links today</CardTitle>
        <Button color="primary">Go somewhere</Button>
      </Card>
    </div>
  );
}
