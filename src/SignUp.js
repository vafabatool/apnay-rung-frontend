import SignupForm from "./SignupForm";
import SignupSuccess from "./SignupSuccess";
import { useState } from "react";
// import Background from "./css/background.png";

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <div className="background-image">
      <div className="form-container">
        {!isSubmitted ? (
          <SignupForm submitForm={submitForm} />
        ) : (
          <SignupSuccess />
        )}
        {/* <SignupSuccess /> */}
      </div>
    </div>
  );
};

export default SignUp;
