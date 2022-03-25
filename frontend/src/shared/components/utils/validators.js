export const validateLoginInfo = ({ mail, password }) =>{
    const isMailValid = validateMail(mail)
    const isPasswordValid = validatePassword(password)

    return isMailValid && isPasswordValid
}

const validatePassword = (password) =>{
    return password.length > 6 && password.length < 24
}

const validateMail = (mail) =>{
    const validExpression = RegExp(/(?:[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.[a-zA-Z]+)/)
    return validExpression.test(mail)
}