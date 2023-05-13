import React, { Component } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'



function SignUp() {




  let [password, setPassword] = useState()
  let [username, setUsername] = useState()
  let [email, setEmail] = useState('')

  function getHandeler(setter) {
    return function handeler(e) {
      setter(e.target.value)
    }
  }

  function handelSobmit(e) {
    e.preventDefault()
  axios.post(`https://moviesapi.ir/api/v1/register`, {
      username,
      password,
      email
   
    })
      .then((res) => res.json())
      .then((responce) => {
        console.log(responce.data)
      })
  }
  return (

    <form>
      <h3>Sign Up</h3>

      <div className="mb-3">
        <label>Last name</label>
        <input value={username} type="text" className="form-control" placeholder="Last name" onChange={getHandeler(setUsername)} />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          value={email}
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={getHandeler(setEmail)}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          value={password}
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={getHandeler(setPassword)}
        />
      </div>
      <div className="d-grid">
        <button onClick={handelSobmit} type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  )

}

export default SignUp