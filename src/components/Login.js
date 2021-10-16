import React, { useState } from "react";
import {
  Button,
  Form,
  Container,
  Header,
  Segment,
  Grid,
} from "semantic-ui-react";
import { login } from "../services/authApi";

const Login = () => {
  const initialFValues = {
    username: "",
    password: "",
  };
  const [values, setValues] = useState(initialFValues);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setValues({
      ...values,
      [id]: value,
    });
  };
  const onSubmit = () => {
    setTimeout(() => {
      login(values.username, values.password)
        .then(({ data }) => {
          // console.log(data)
        })
        .catch(() => {
          // console.log("error");
        });
    }, 1000);
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header
        as="h1"
        content="Error Portal Demo With Login Error Response"
        style={{ marginTop: "5em" }}
        textAlign="center"
      />

      <Grid.Column style={{ maxWidth: 450, marginTop: 120 }}>
        <Segment>
          <Header as="h2" color="teal" textAlign="center">
            Login to see 'User not found' error message
          </Header>
          <Form size="large">
            <Form.Input
              id="username"
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={handleInputChange}
            />
            <Form.Input
              id="password"
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={handleInputChange}
            />

            <Button color="teal" fluid size="large" onClick={onSubmit}>
              Login
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </div>
  );
};

export default Login;
