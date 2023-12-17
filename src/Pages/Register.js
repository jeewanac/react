import axios from "axios";
import { useState } from "react";

const Register = () =>{

    const [username, setUsername] = useState(null);

    const [password, setPassword] = useState(null);

    const [email, setEmail] = useState(null);

    const handleUsername = (e) =>{
        setUsername(e.target.value);
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }

    const handleRegister = async (e) =>{
        e.preventDefault();

        const data = {
            "username" : username,
            "password" : password,
            "email": email
        }

        try {
            const response = axios.post("http://localhost:8080/auth/register", data);
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div className="login-box">
            <div className="text-center">
                <h1>User Register</h1>
            </div>

            <form onSubmit={handleRegister}>
                <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="userName" onChange={(e) =>(setUsername)(e.target.value)} required/>
                </div>
                <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Email" onChange={(e) =>(setEmail)(e.target.value)} required/>
                </div>
                <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="password" onChange={(e) =>(setPassword)(e.target.value)} required/>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
} 

export default Register;