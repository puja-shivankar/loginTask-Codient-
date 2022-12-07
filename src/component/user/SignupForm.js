import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/signup.css";

export const SignupForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    email: "",
    password: "",
    c_Password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
    console.log(formErrors);

    // console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("UserData", JSON.stringify(formValues));
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    

    // console.log(formValues);
  };
  useEffect(() => {
    //console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //validation for username
    if (!values.username) {
      errors.username = "username is required! ";
    }
    // validation for email
    if (!values.email) {
      errors.email = "email is required! ";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    //validation for password
    if (!values.password) {
      errors.password = "password is required! ";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceeds more than 10 characters";
    }
    //confirm password
    if (!values.c_Password) {
      errors.c_Password = "password is required! ";
    } else if (values.password !== values.c_Password) {
      //alert("Passw");
      errors.c_Password = "Password Doesn't Matched";
    }

    return errors;
  };
  
  return (
    <div className="main">
      <div className="card mx-auto shadow mt-8  mb-4 main-card">
        {Object.keys(formErrors).length ===0 && isSubmit ? (
        <div className="alert alert_info">Registraion Completed! </div>
        ):(
            <pre></pre>
        )}
        <h3 className="mt-2">Registraion Form</h3>

        <div>
          <form className="mx-auto p-4" onSubmit={handleSubmit}>
            <div className="form-group username">
              <label className="d-flex">
                username <p>{formErrors.username}</p>
              </label>
              <input
                type="text"
                name="username"
                value={formValues.username}
                onChange={handleChange}
                placeholder="Username"
                className="form-control"
              />
            </div>

            <div className="form-group userId">
              <label className="d-flex">
                Email <p>{formErrors.email}</p>
              </label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="email"
                className="form-control"
              />
            </div>

            <div className="form-group mb-3 password">
              <label className="d-flex">
                password<p>{formErrors.password}</p>
              </label>
              <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="password"
                className="form-control"
              />
            </div>
            <div className="form-group mb-3 password">
              <label className="d-flex">
                Confirm password <p>{formErrors.c_Password}</p>
              </label>
              <input
                type="password"
                name="c_Password"
                value={formValues.c_Password}
                onChange={handleChange}
                placeholder="Confirm password"
                className="form-control"
              />
            </div>
            <div className="mt-2">
              <button className="btn btn-success mx-3">Register</button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate("/");
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
