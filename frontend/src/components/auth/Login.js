import React, { useState, useContext, useEffect } from "react";
import { Form, FormGroup, Label, Input, Container, Alert } from "reactstrap";
import AuthContext from "../../context/auth/AuthContext";

const Login = ({ history }) => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;

  const [alert, setAlert] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (error === "Invalid Credentials") {
      setAlert(<Alert color="danger">Invalid Credentials</Alert>);
      setTimeout(() => {
        setAlert();
        clearErrors();
      }, 5000);
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert(<Alert color="danger">Please enter all fields</Alert>);
    } else {
      login({ email, password });
    }
  };

  return (
    <Container>
      <h1 className="text-center mt-3">
        Account <span className="text-info">Login</span>
      </h1>
      {alert}
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            placeholder="Enter email..."
            onChange={onChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            placeholder="Enter Password..."
            onChange={onChange}
            required
            minLength="6"
          />
        </FormGroup>
        <Input type="submit" value="Login" className="btn-info" />
      </Form>
    </Container>
  );
};

export default Login;
