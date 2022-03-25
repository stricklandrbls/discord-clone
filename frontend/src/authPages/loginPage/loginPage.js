import React, {useState} from 'react'
import AuthBox from '../../shared/components/authBox'
import LoginHeader from './loginHeader'
import LoginInput from './loginInput'

const LoginPage = () =>{
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    return(
        <AuthBox>
            <LoginHeader/>
            <LoginInput
                mail={mail}
                setMail={setMail}
                password={password}
                setPassword={setPassword}></LoginInput>
        </AuthBox>
    )
}

export default LoginPage