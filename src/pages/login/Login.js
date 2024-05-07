import React , {useState} from 'react'
import axios from "axios"
import "./login.scss"
import { hasFormSubmit } from '@testing-library/user-event/dist/utils'

const API_URL = "https://jsonplaceholder.typicode.com/users"

function Login() {

    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post(API_URL, { username, password })
            .then((res) => {
                const data = res.data
                if (data.message === "Error") {
                    console.log("username or password is incorrect");
                } else {
                    console.log(data);
                    localStorage.setItem("token", data.token)
                    window.open("/admin", "_self")
                }
            })
            .catch(err => console.log(err))
    }
  return (
    <div className='login'>
        {/* <div className="login__logo">
            <img src={logo} alt="" />
            <img src={foot} alt="" />
        </div> */}
        <form onSubmit={handleSubmit} action="">
            <div className='login__input-1'>
                <label htmlFor="">Email Address*</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} required type="email" placeholder='Enter Your Email' />
            </div>
            <div className='login__input-2'>
                <label htmlFor="">Password*</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" placeholder='Enter Your password' />
            </div>
            <div className="login__password">
                <div>
                    <input type="checkbox" />
                    <h2>Remember Me</h2>
                </div>
                <h3>Forgot Password?</h3>
            </div>
            <div className="login__end">
                <button className='login__button'>Login</button>
                <button className='signup'>Signup?</button>
            </div>
        </form>
    </div>
  )
}

export default Login