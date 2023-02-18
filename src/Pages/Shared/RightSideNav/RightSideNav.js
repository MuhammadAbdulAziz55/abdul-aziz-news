import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const RightSideNav = () => {
  const { loginWithGoogle } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleLogin}
          className="mb-2"
          variant="outline-primary"
        >
          {" "}
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login with Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaInstagram /> Instagram
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaLinkedin /> Linkedin
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel />
      </div>
    </div>
  );
};

export default RightSideNav;
