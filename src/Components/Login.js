import { useState } from "react"
import { useNavigate } from 'react-router-dom'

const Login = () => {
const [credentials, setCredentials] = useState({email:"", password:""})

// NOTE: ab ham use kar rahay hain useNavigate hook hay jo kay use hota hay navigation kay liay jasay hi condition true to navigate karo /about pay like this
let navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault() //ya karny say bar bar reload nahi ho ga 
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
        });
        const json = await response.json()
        console.log(json);
        // checking success aya jo kay abhi auth.js file may banaya hay to true varna false
    if (json.success){
        localStorage.setItem('token',json.authtoken);
        navigate("/"); //NOTE: ya kam hota hay navigate hook ka kay ager true hoa to ais page pay navigate karo 
    }
    else{
        alert("Invalid credentials")
    }

    }


    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]: e.target.value})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}> 
                {/* onSubmit form pay lagaya jata hay may nay submit button pay lagaya tha */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={onChange} value={credentials.email} id="email" name='email' aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onChange} value={credentials.password} autoComplete="current-password" id="password" name='password' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
