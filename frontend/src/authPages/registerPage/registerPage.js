import React from 'react'
import AuthBox from '../../shared/components/authBox'
import InputWithLabel from '../../shared/components/Input-w-label'

const RegisterPage = () =>{
    return(
        <AuthBox>
            <InputWithLabel
                label="E-Mail"></InputWithLabel>
        </AuthBox>
    )
}

export default RegisterPage