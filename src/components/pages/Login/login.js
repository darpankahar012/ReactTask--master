import React, { useState } from 'react';

const Login = ({ onSubmit }) => {
  const [fields, setFields] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validator()) {
      // alert("Form submitted");
    } else {
      alert("Valid Form !");
    }
    // onSubmit();
  };

  const validator = () => {
    let isValid = true;
    if (!fields.firstname) {
      setError((prevData) => {
        return { ...prevData, firstname: "Please Enter Firstname." };
      });
      isValid = false;
    }
    if (fields.firstname === "") {
      setError((prevData) => {
        return { ...prevData, firstname: "Please Enter Username." };
      });
      isValid = false;
    }

    if (!fields.lastname) {
      setError((prevData) => {
        return { ...prevData, lastname: "Please Enter Username." };
      });
      isValid = false;
    }

    if (fields.lastname === "") {
      setError((prevData) => {
        return { ...prevData, lastname: "Please Enter Lastname." };
      });
      isValid = false;
    }

    if (!fields.email) {
      setError((prevData) => {
        return { ...prevData, email: "*Please enter valid email-ID." };
      });
      isValid = false;
    }

    if (fields.email === "") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields.email)) {
        setError((prevData) => {
          return { ...prevData, email: "*Please enter valid email-ID." };
        });
        isValid = false;
      }
    }

    if (!fields.password) {
      setError((prevData) => {
        return { ...prevData, password: "*Please enter secure and strong password." };
      });
      isValid = false;
    }

    if (fields.password === "") {
      setError((prevData) => {
        return { ...prevData, password: "*Please enter secure and strong password." };
      });
      isValid = false;
    }
    return isValid;
  };

  const handleChange = (e) => {
    setFields((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
    setError((prevData) => {
      return { ...prevData, [e.target.name]: "" };
    });
  }


  return (
    <div id="login">
      <div class="container">
        <div id="login-row" class="row justify-content-center align-items-center">
          <div id="login-column" class="col-md-6">
            <div id="login-box" class="col-md-12">
              <form id="login-form" class="form" action="" method="post">
                <h3 class="text-center text-info">Login</h3>
                <div class="form-group">
                  <label for="firstname" class="text-info">FirstName:</label><br />
                  <input
                    type="text"
                    value={fields.firstname}
                    name="firstname"
                    onChange={(e) => handleChange(e)}
                    class="form-control"
                  />
                  {error.firstname && <p className="errorMsg">{error.firstname}</p>}
                </div>
                <div class="form-group">
                  <label for="lastname" class="text-info">LastName:</label><br />
                  <input
                    type="text"
                    value={fields.lastname}
                    name="lastname"
                    onChange={(e) => handleChange(e)}
                    class="form-control"
                  />
                  {error.lastname && <p className="errorMsg">{error.lastname}</p>}
                </div>
                <div class="form-group">
                  <label for="email" class="text-info">Email:</label><br />
                  <input
                    type="text"
                    value={fields.email}
                    name="email"
                    onChange={(e) => handleChange(e)}
                    class="form-control"
                  />
                  {error.email && <p className="errorMsg">{error.email}</p>}
                </div>
                <div class="form-group">
                  <label for="password" class="text-info">Password:</label><br />
                  <input
                    type="password"
                    value={fields.password}
                    name="password"
                    onChange={(e) => handleChange(e)}
                    class="form-control"
                  />
                  {error.password && <p className="errorMsg">{error.password}</p>}
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-info btn-md submitbtn" name="submit" onClick={(e) => handleLogin(e)}>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login