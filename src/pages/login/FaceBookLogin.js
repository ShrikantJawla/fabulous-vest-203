import React from 'react'
import { Box, IconButton } from '@chakra-ui/react';
import { ImFacebook2 } from 'react-icons/im'
import { db, auth, getSingleItem } from './../../Configs/firebaseConfigs';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/authContext/authContext';
import { doc, setDoc } from "firebase/firestore";

function FacebookLogin() {
    const navigate = useNavigate();
    const { authState, authDispatch, handleFormsToggle, toggleAuthForms } = React.useContext(AuthContext);
    const provider = new FacebookAuthProvider(auth);

    async function checkSingleUser(id) {
        let res = await getSingleItem(id);
        if (res.data() !== undefined) return true;
        return false;
    }
    async function getSingleUser(id) {
        let res = await getSingleItem(id);
        localStorage.setItem('loginedUser', JSON.stringify(res.data()));
        authDispatch({ type: 'LOGIN', payload: res.data() });
    }


    function handleSubmit() {
        authDispatch({ type: 'LOADING' });
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // console.log(token)
                // The signed-in user info.
                authDispatch({ type: 'LOADED' });
                const user = result.user;
                console.log(result)
                let updateData = {
                    ...authState.userDetails,
                    name: user.displayName,
                    email: user.email,
                    mobile: user.phoneNumber,
                    profilePhoto: user.photoURL,
                }
                if (checkSingleUser(updateData.email)) {
                    getSingleUser(updateData.email);
                } else {
                    localStorage.setItem('loginedUser', JSON.stringify(updateData));
                    authDispatch({ type: 'LOGIN', payload: updateData });
                    setDoc(doc(db, 'users', updateData.email), updateData);
                }
                // localStorage.setItem('loginedUser', JSON.stringify(updateData));
                // authDispatch({ type: 'LOGIN', payload: updateData });
                // setDoc(doc(db, 'users', updateData.email), updateData);
                navigate('/');
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);
                alert('something went wrong');
                authDispatch({ type: 'LOADED' });
                // ...
            });
    }


    return (
        <Box >
            <IconButton onClick={handleSubmit} variant='outline' size='lg' icon={<ImFacebook2 color='#4267B2' size='28px' />} />
        </Box>
    )
}

export default FacebookLogin
