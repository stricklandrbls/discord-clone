import React from "react";
import CustomPrimaryButton from '../../shared/components/customPrimaryButton'
import RedirectInfo from "../../shared/components/redirectInfo";
import { useNavigate } from 'react-router-dom'
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () =>{
    return "Enter E-mail and password to log in!"
}
const getFormValidMessage = () =>{
    return 'Press to log in!'
}
const LoginFooter = ({ handleLogin, isFormValid}) =>{
  
    return(
        <>
        <Tooltip title={isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
            <div>
                <CustomPrimaryButton
                    label="Register"
                    additionalStyles={{ marginTop: "30px" }}
                    disabled={isFormValid}
                    onClick={handleLogin}>    
                </CustomPrimaryButton>
            </div>
        </Tooltip>
        </>
    )
}

export default LoginFooter