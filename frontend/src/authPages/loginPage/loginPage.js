import React, {useState, useEffect} from 'react'
import AuthBox from '../../shared/components/authBox'
import LoginFooter from './loginFooter'
import LoginHeader from './loginHeader'
import LoginInput from './loginInput'
import { validateLoginInfo } from '../../shared/components/utils/validators'

const LoginPage = () =>{
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [isFormValid, setFormValid] = useState(false);

    useEffect(()=>{
        setFormValid(validateLoginInfo({mail, password}))
    }, [mail, password, setFormValid])

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