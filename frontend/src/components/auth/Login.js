import React, { useState, useContext, useEffect } from "react";
import { Form, FormGroup, Label, Input, Container } from "reactstrap";
import AuthContext from "../../context/auth/AuthContext";

const Login = ({ history }) => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (error === "Invalid Credentials") {
      alert("Invalid Credentials");
    }
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
      alert("Please enter all fields");
    } else {
      login({ email, password });
    }
  };

  return (
    <Container>
      <h1 className="text-center">
        Account <span className="text-info">Login</span>
      </h1>
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
