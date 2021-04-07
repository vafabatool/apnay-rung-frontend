import SignupForm from "./SignupForm";
import SignupSuccess from "./SignupSuccess";
import { useState } from "react";

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <div>
      {!isSubmitted ? (
        <SignupForm submitForm={submitForm} />
      ) : (
        <SignupSuccess />
      )}
      {/* <SignupSuccess /> */}
    </div>
  );
};

export default SignUp;
