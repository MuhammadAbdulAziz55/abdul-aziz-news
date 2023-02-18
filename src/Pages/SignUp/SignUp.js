import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
const SignUp = () => {
  const { signUpWithEmailAndPassword, updateUserProfile, verifyEmail } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photoURL);
    signUpWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success("Please check your email and verify your account");
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((e) => console.error(e));
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={handleAccepted}
          label={
            <>
              Accept <Link to="/term-and-condition">Terms and Conditions</Link>
            </>
          }
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!accepted}>
        Sign up
      </Button>
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form>
  );
};

export default SignUp;
