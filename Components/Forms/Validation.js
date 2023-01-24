import * as Yup from "yup"


export const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Enter valid email").required("Please enter registed email"),
    password: Yup.string().required("please enter password").min(6, "Password must be 6 character"),
    confirmPassword:Yup.string().required("Please confirm password").oneOf([Yup.ref("password")], "Password and confirm password does not match" )
})