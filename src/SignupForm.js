import { useState, useEffect } from "react";

const SignUpForm = () => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    password2: ""
  });
  const [errors, setErros] = useState({});

  const changeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });

    return changeHandler;
  };

  return (
    <div className="form-content-right">
      <form className="form">
        <h3>Sign up with Apnay Rung today!</h3>
        <div className="form-inputs">
          {/* <label htmlFor="name" className="form-label">
          </label> */}
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="full name"
          />
        </div>
        <div className="form-inputs">
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="email"
          />
        </div>
        <div className="form-inputs">
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="password"
          />
        </div>
        <div className="form-inputs">
          <input
            type="password2"
            name="password2"
            className="form-input"
            placeholder="re-type password"
          />
        </div>
        <button className="sign-up-btn" type="submit">
          Next Step
        </button>
        <br />
        <span>
          Or
          <a href="#"> Log in </a>
        </span>
      </form>
    </div>
  );
};

export default SignUpForm;
