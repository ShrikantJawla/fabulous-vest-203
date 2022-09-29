import React from 'react'
import { Box, IconButton } from '@chakra-ui/react';
import { BsGithub, BsTwitter } from 'react-icons/bs'
import { auth } from './../../Configs/firebaseConfigs';
import { signInWithPopup, TwitterAuthProvider, } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/authContext/authContext';

function TwitterLogin() {
    const navigate = useNavigate();
    const { authState, authDispatch, handleFormsToggle, toggleAuthForms } = React.useContext(AuthContext);
    const provider = new TwitterAuthProvider(auth);


    function handleSubmit() {
        authDispatch({ type: 'LOADING' });
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = TwitterAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // console.log(token)
                // The signed-in user info.
                authDispatch({ type: 'LOADED' });
                const user = result.user;
                console.log(result)
                let updateData = {
                    name: user.displayName,
                    email: user.email,
                    mobile: user.phoneNumber,
                    profilePhoto: user.photoURL,
                }
                authDispatch({ type: 'LOGIN', payload: updateData });
                navigate('/');
                // ...
            }).catch((error) => {
                // Handle Errors here.
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = TwitterAuthProvider.credentialFromError(error);
                alert('something went wrong');
                authDispatch({ type: 'LOADED' });
                // ...
            });

    }


    return (
        <Box >
            <IconButton onClick={handleSubmit} variant='outline' size='lg' icon={<BsTwitter color='#242121' size='28px' />} />
        </Box>
    )
}

export default TwitterLogin
