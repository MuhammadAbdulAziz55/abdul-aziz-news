import React from "react";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div>
      <h3>This is term and condition</h3>
      <p>
        Go back to <Link to="/sign-up">Sign up</Link>
      </p>
    </div>
  );
};

export default TermsAndCondition;
