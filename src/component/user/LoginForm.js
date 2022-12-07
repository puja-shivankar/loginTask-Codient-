import React, { useEffect, useState } from "react";
import "../../styles/Login.css";
import { useNavigate } from "react-router";
function LoginForm(props) {
  const userCredential = JSON.parse(localStorage.getItem("UserData"));
  const navigate = useNavigate();
  const initialValues = {
       username: "",
       email: "",
       password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
    // console.log(formErrors)

    // console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // const userCredential = JSON.parse(localStorage.getItem("UserData"));
    if (
      formValues.email === userCredential.email &&
      formValues.password === userCredential.password &&
      formValues.username === userCredential.username
    ) {
      localStorage.setItem("isAuthenticated", true);
      navigate("/Dashboard");
    }
    props.dataHandler(formValues.username);
  };
  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    // const userData = JSON.parse(localStorage.getItem("UserData"));
    // console.log(userData.username);
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //validation for username
    if (!values.username) {
      errors.username = "username is required! ";
    } else if (values.username !== userCredential.username) {
      errors.username = "Invalid username!";
    }

    //validation for email
    if (!values.email) {
      errors.email = "email is required! ";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    } else if (values.email !== userCredential.email) {
      errors.email = "Invalid Email! ";
    }
    //validation for password
    if (!values.password) {
      errors.password = "password is required! ";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceeds more than 10 characters";
    } else if (values.password !== userCredential.password) {
      errors.password = "Invalid Password";
    }
    return errors;
  };
  return (
    <div className="main">
      <div className="card mx-auto shadow mt-8 p-4 mb-4 card-body">
        {/* {Object.keys(formErrors).length ===0 && isSubmit ? (
        <div className="ui message success">SignedIn successfully</div>
        ):(
            <pre>{JSON.stringify(formValues, undefined,1)}</pre>
        )} */}
        <h3 id="LogoBtn">Login</h3>

        <div>
          <form className="mx-auto p-4">
            <div className="form-group username">
              <label className="d-flex ">
                username<p>{formErrors.username}</p>
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

            <div className="form-group mt-1 userId">
              <label className="d-flex">
                Email<p>{formErrors.email}</p>
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

            <div className="form-group mb-3 mt-1 password">
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
            <div className="mt-2">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Login
              </button>
              <button
                className="btn btn-success mx-3"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                SignUP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
