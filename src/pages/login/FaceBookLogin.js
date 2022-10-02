import React from 'react'
import { Box, HStack, IconButton, Text } from '@chakra-ui/react';
import { ImFacebook2 } from 'react-icons/im'
import { db, auth, getSingleItem } from './../../Configs/firebaseConfigs';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/authContext/authContext';
import { doc, setDoc } from "firebase/firestore";
import { FaFacebookF } from 'react-icons/fa';

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
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // console.log(token)
                // The signed-in user info.
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
                // console.log(errorCode)
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);
                alert('something went wrong');
                // ...
            });
    }


    return (
        <Box >
            {/* <IconButton  variant='outline' size='lg' icon={<ImFacebook2 color='#4267B2' size='28px' />} /> */}
            <Box >
                <HStack onClick={handleSubmit} px='6' _hover={{ bg: '#1a1aff', cursor: 'pointer' }} h='40px' bg='facebook.700' rounded='5' color='white' onClick={handleSubmit} w='200px'>
                    <FaFacebookF size='22px' />
                    <Text fontSize={18} fontWeight='500'>Facebook</Text>
                </HStack>
            </Box>
        </Box>
    )
}

export default FacebookLogin
