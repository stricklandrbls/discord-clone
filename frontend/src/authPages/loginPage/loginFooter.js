import React from "react";
import CustomPrimaryButton from '../../shared/components/customPrimaryButton'
import RedirectInfo from "../../shared/components/redirectInfo";
import { Navigate, useNavigate } from 'react-router-dom'


const LoginFooter = ({ handleLogin, isFormValid}) =>{
    
    const history = useNavigate()
    const handlePushToRegisterPage = () =>{
        history('/register')
    }
    return(
        <>
        <CustomPrimaryButton
            label="Login"
            additionalStyles={{ marginTop: "30px" }}
            disabled={isFormValid}
            onClick={handleLogin}>    
        </CustomPrimaryButton>
        <RedirectInfo 
            text="Need an account? "
            redirectText="Create an account"
            additionalStyles={{marginTop: '5px'}}
            redirectHandler={handlePushToRegisterPage}/>
        </>
    )
}

export default LoginFooter