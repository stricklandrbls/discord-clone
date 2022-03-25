import { Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import AuthBox from '../../shared/components/authBox'
import InputWithLabel from '../../shared/components/Input-w-label'
import RegisterInput from './registerInput'

const RegisterPage = () =>{

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const [isFormValid, setFormValid] = useState(false)

    return(
        <AuthBox>
            <Typography variant="h3" sx={{color: "white"}}>Create Account</Typography>
            <RegisterInput
                mail={mail}
                setMail={setMail}
                password={password}
                setPassword={setPassword}
                username={username}
                setUsername={setUsername}
                >
            </RegisterInput>
        </AuthBox>
    )
}

export default RegisterPage