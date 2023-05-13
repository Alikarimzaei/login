import React, { Component, useState } from 'react'
import axios from 'axios'

function Login() {
  let [password, setPassword] = useState()
  let [email, setEmail] = useState('')
  function handelEmailChange(e) {
    setEmail(e.target.value)
  }
  function handelePasswordChange(e) {
    setPassword(e.target.value)
  }
  function handelSubmit(e) {
    e.preventDefault()
    console.log(password, email)
    axios.post(`https://moviesapi.ir/oauth/token`, {
      email,
      password,
     
    }).then((res) => {
      console.log(res.data)
    })
  }



  return (
    <form>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          value={email}
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={handelEmailChange}
        />
      </div>
      <br />
      <div className="mb-3">
        <label>Password</label>
        <input
          value={password}
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={handelePasswordChange}
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button onClick={handelSubmit} type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>


    </form>
  )

}
export default Login