import {Link} from "react-router-dom"
import {React,useState,useRef} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import './register.scss'

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
  
    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();
  
    const handleStart = () => {
      setEmail(emailRef.current.value);
    };
    const handleFinish = async (e) => {
      e.preventDefault();
      setPassword(passwordRef.current.value);
      setUsername(usernameRef.current.value);
      try {
        await axios.post("auth/register", { email,username, password });
        navigate("/login");
        console.log(username);
      } catch (err) {}
    };
  return (
    <div className='register'>
        <div className='top'>
            <div className='wrapper'>
            <img className='logo'
            src='https://cineflix-filmes.online/wp-content/uploads/2021/08/CINEFLIX-removebg-preview.png'
            alt=''
            />
            <button className='loginButton'>Sign In</button>
            </div>
        </div>
        <div className='container'>
            <h1>Unlimited movies,TV shows and many more</h1>
            <h2>Watch snywhere. Cancel anytime</h2>
            <p>
                Ready to watch ? Enter your email to create or restart your subscription.
            </p>
            {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
            
        </div>

    </div>
  )
}

 