import React, { useState } from 'react';
import {
  Button,
  Form,
  Message,
  Header,
  Segment,
  Grid,
} from 'semantic-ui-react';
import { login } from '../services/authApi';

const Login = () => {
  const initialFValues = {
    username: '',
    password: '',
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
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Message
        info
        color="teal"
        header="Error Portal Demo With Login Error Response"
        content=" Try login with any credentantials to see mock 'Invalid Username'
        error message"
        size="massive"
        style={{ marginTop: '5em' }}
      />

      <Grid.Column style={{ maxWidth: 450, marginTop: 32 }}>
        <Segment>
          <Header as="h2" color="teal" textAlign="center">
            Login to your account
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
