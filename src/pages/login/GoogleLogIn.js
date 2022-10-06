import React from 'react'
import { Box, Button, HStack, IconButton, Text } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc'
import { auth } from './../../Configs/firebaseConfigs';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/authContext/authContext';
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from '../../Configs/firebaseConfigs';
import { getSingleItem } from './../../Configs/firebaseConfigs';
import { BsGoogle } from 'react-icons/bs';





function GoogleLogIn() {
    const navigate = useNavigate();
    const { authState, authDispatch, } = React.useContext(AuthContext);
    const provider = new GoogleAuthProvider(auth);

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
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // console.log(token)
                // The signed-in user info.
                const user = result.user;
                // console.log(result)
                let updateData = {
                    ...authState.userDetails,
                    name: user.displayName,
                    email: user.email,
                    mobile: user.phoneNumber,
                    profilePhoto: user.photoURL,
                }
                //reducer login action
                if (checkSingleUser(updateData.email)) {
                    getSingleUser(updateData.email);
                } else {
                    localStorage.setItem('loginedUser', JSON.stringify(updateData));
                    authDispatch({ type: 'LOGIN', payload: updateData });
                    setDoc(doc(db, 'users', updateData.email), updateData);
                }
                navigate('/');
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                alert('something went wrong');
                // ...
            });
    }


    return (
        <Box >
            <HStack px='6' _hover={{ bg: '#e60000',cursor:'pointer' }} h='40px' bg='#e63900' rounded='5' color='white' onClick={handleSubmit} w='200px'>
                <BsGoogle size='22px'/>
                <Text fontSize={18} fontWeight='500'>Google</Text>
            </HStack>
        </Box>
    )
}

export default GoogleLogIn
