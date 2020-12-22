import React, { useState, useContext, useEffect } from "react";
import { Form, FormGroup, Label, Input, Container, Alert } from "reactstrap";
import AuthContext from "../../context/auth/AuthContext";

const Register = ({ history }) => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;

  const [alert, setAlert] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (error === "User already exists") {
      setAlert(<Alert color="danger">User already exists</Alert>);
      setTimeout(() => {
        setAlert();
        clearErrors();
      }, 5000);
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert(<Alert color="danger">Please enter all fields</Alert>);
      setTimeout(() => {
        setAlert();
      }, 5000);
    } else if (password !== password2) {
      setAlert(<Alert color="danger">Passwords do not match</Alert>);
      setTimeout(() => {
        setAlert();
      }, 5000);
    } else {
      register({ name, email, password });
    }
  };

  return (
    <Container>
      <h1 className="text-center mt-3">
        Account <span className="text-info">Register</span>
      </h1>
      {alert}
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="Enter name..."
            onChange={onChange}
            required
          />
        </FormGroup>
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
        <FormGroup>
          <Label for="name">Confirm Password</Label>
          <Input
            type="password"
            name="password2"
            value={password2}
            placeholder="Re-enter password..."
            onChange={onChange}
            required
            minLength="6"
          />
        </FormGroup>
        <Input type="submit" value="Register" className="btn-info" />
      </Form>
    </Container>
  );
};

export default Register;
