import { Typography } from "@mui/material";
import React from "react";
import CustomPrimaryButton from '../../shared/components/customPrimaryButton'
import { styled } from '@mui/system'

const LinkText = styled('span')({
    color: "#00aff4",
    fontWeight: 500,
    cursor: "pointer",
})
const RedirectInfo = ({ text, redirectText, additionalStyles, redirectHandler }) =>{
    return(
        <>
        <Typography sx={{ color: "#72767D"}}
                    styles={additionalStyles ? additionalStyles: {}}
                    variant='subtitle2'>
        {text} <LinkText onClick={redirectHandler}>{redirectText}</LinkText>
        </Typography>
        </>
    )
}

export default RedirectInfo