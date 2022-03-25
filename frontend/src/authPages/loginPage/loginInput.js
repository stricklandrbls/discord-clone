import React from "react";
import InputWithLabel from "../../shared/components/Input-w-label"

const LoginInput = ({mail, setMail, password, setPassword}) =>{
    return (
        <>
        <InputWithLabel
            value={mail}
            setValue={setMail}
            label="E-Mail"
            type="text"
            placeholder="Enter e-mail address">
        </InputWithLabel>

        <InputWithLabel
            value={password}
            setValue={setPassword}
            label="Password"
            type="password"
            placeholder="Enter password">
        </InputWithLabel>
        </>
    )
}

export default LoginInput