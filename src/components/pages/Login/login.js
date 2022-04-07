import React, { useState } from 'react';

const Login = ({ onSubmit }) => {
  const [firstname, updateFirstname] = useState('');
  const [lastname, updateLastname] = useState('');
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    //do all the default login activities and then call the onsubmit prop method
    onSubmit();
  };
  return (
    <div id="login">
      <div class="container">
        <div id="login-row" class="row justify-content-center align-items-center">
          <div id="login-column" class="col-md-6">
            <div id="login-box" class="col-md-12">
              <form id="login-form" class="form" action="" method="post">
                <h3 class="text-center text-info">Login Form</h3>
                <div class="form-group">
                  <label for="firstname" class="text-info">FirstName:</label><br />
                  <input
                    type="text"
                    value={firstname}
                    name="firstname"
                    onChange={(e) => updateFirstname(e.target.value)}
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="lastname" class="text-info">LastName:</label><br />
                  <input
                    type="text"
                    value={lastname}
                    name="lastname"
                    onChange={(e) => updateLastname(e.target.value)}
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="email" class="text-info">Email:</label><br />
                  <input
                    type="text"
                    value={email}
                    name="email"
                    onChange={(e) => updateEmail(e.target.value)}
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="password" class="text-info">Password:</label><br />
                  <input
                    type="password"
                    value={password}
                    name="password"
                    onChange={(e) => updatePassword(e.target.value)}
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-info btn-md" name="submit" onClick={(e) => handleLogin(e)}>
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