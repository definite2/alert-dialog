import React,{useState} from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
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
  const onSubmit = (values) => {
    setTimeout(() => {
      login(values.username, values.password)
        .then(({ data }) => {
          console.log(data)
        })
        .catch(() => {
          console.log("error");
        });
    }, 1000);
  };
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
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
          </Segment>
        </Form>

      </Grid.Column>
    </Grid>
  );
};

export default Login;
