import React from "react";
import SignIn from "../../components/SignIn"
import SignUp from "../../components/SignUp"
import { AuthContext } from "../../Contexts/authContext/authContext";






function SignUpAndLoginPage() {
    const { toggleAuthForms, handleFormsToggle } = React.useContext(AuthContext);

    return (
        <>
            {toggleAuthForms ? <SignIn /> : <SignUp />}
        </>
    )
}

export default SignUpAndLoginPage
