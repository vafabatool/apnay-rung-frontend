import { useState, useEffect } from "react";
import "./styles.css";

const SignUpForm = ({ submitForm }) => {
  // const {submit} =
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    password2: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const changeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const validateInfo = (values) => {
    let errors = {};

    if (!values.userName.trim()) {
      errors.userName = "Your name is required";
    }

    if (!values.email) {
      errors.email = "Email required";
      //shows errors if .com or incorrect email not added
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    }
    if (!values.password2) {
      errors.password2 = "Password is required";
    } else if (values.password2 !== values.password) {
      errors.password2 = "Passwords do not match";
    }

    return errors;
  };
  const submitHandler = (e) => {
    e.preventDefault();

    setErrors(validateInfo(values));
    setIsSubmitting(true);
  };

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={submitHandler}>
        <h3>Sign up with Apnay Rung today!</h3>
        <div className="form-inputs">
          {/* <label htmlFor="name" className="form-label">
          </label> */}
          <input
            type="text"
            name="userName"
            className="form-input"
            placeholder="full name"
            value={values.userName}
            onChange={changeHandler}
          />
          {errors.userName && <p>{errors.userName} </p>}
        </div>
        <div className="form-inputs">
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="email"
            value={values.email}
            onChange={changeHandler}
          />
          {errors.email && <p>{errors.email} </p>}
        </div>
        <div className="form-inputs">
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="password"
            value={values.password1}
            onChange={changeHandler}
          />
          {errors.password && <p>{errors.password} </p>}
        </div>
        <div className="form-inputs">
          <input
            type="password"
            name="password2"
            className="form-input"
            placeholder="re-type password"
            value={values.password2}
            onChange={changeHandler}
          />
          {errors.password2 && <p>{errors.password2} </p>}
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
