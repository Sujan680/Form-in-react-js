import { useState } from "react"


const SignupForm = () =>{

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name] : value,
        })
    };

    const handleSubmit = (e)=> {
        e.preventDefault();

        // perform validation
        if(formData.password !== formData.confirmPassword){
            alert("Passwords do not match!");
            return;
        }
        console.log("Signup Data submitted", formData);
        // perform signup logic here, e.g. call an API
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange}  />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            </div>
            <button type="submit">Signup</button>
        </form>
    )
}

export default SignupForm;