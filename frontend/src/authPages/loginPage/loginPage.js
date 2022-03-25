import React, {useState} from 'react'
import AuthBox from '../../shared/components/authBox'
import LoginFooter from './loginFooter'
import LoginHeader from './loginHeader'
import LoginInput from './loginInput'

const LoginPage = () =>{
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [isFormValid, setFormValid] = useState(false);

    const handleLogin = () =>{
        console.log("Logging in!")
    }

    return(
        <>
        <AuthBox>
            <LoginHeader/>
            <LoginInput
                mail={mail}
                setMail={setMail}
                password={password}
                setPassword={setPassword}></LoginInput>
        <LoginFooter isFormValid={!isFormValid} handleLogin={handleLogin}></LoginFooter>
        </AuthBox>
        </>
    )
}

export default LoginPage