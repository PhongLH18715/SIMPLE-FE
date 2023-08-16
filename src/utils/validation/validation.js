export const isEmpty = value => {
    if (!value) return false;
    return true
}
export const isEmail = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    console.log(regex.test(email), email)
    return regex.test(email)
}
export const isPassword = password => {
    if (password.length < 6) return false;
    return true
}
export const isCf_pass = (password, cf_password) => {
    if (password === cf_password) return true;
    return false
}