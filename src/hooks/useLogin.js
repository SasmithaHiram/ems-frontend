import React, {useState} from 'react'

const UseLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({email, password});
    }

    return {
        setEmail,
        setPassword,
        email,
        password,
        handleSubmit
    }
}
export default UseLogin
