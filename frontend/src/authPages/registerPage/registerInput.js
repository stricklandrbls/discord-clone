import React from 'react'
import { useState } from 'react'
import InputWithLabel from '../../shared/components/Input-w-label'

const RegisterInput = (props) =>{
    const { mail, setMail, username, setUsername, password, setPassword } = props
    return(
        <>
        <InputWithLabel
            value={mail}
            setValue={setMail}
            label='E-Mail'
            type='text'
            placeholder="E-mail here...">
        </InputWithLabel>
        <InputWithLabel
            value={username}
            setValue={setUsername}
            label='Username'
            type='text'
            placeholder="Username here...">
        </InputWithLabel>
        <InputWithLabel
            value={password}
            setValue={setPassword}
            label='Password'
            type='password'>
        </InputWithLabel>
        </>
    )
}

export default RegisterInput