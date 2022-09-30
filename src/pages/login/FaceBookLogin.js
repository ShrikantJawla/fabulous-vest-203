import React from 'react'
import { Box, IconButton } from '@chakra-ui/react';
import { ImFacebook2 } from 'react-icons/im'
import { auth } from './../../Configs/firebaseConfigs';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/authContext/authContext';
import { collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from '../../Configs/firebaseConfigs';

function FacebookLogin() {
    const [allUsers, setAllUsers] = React.useState([]);
    const navigate = useNavigate();
    const { authState, authDispatch, handleFormsToggle, toggleAuthForms } = React.useContext(AuthContext);
    const provider = new FacebookAuthProvider(auth);

    React.useEffect(() => {
        getDocs(collection(db, 'users'))
            .then(res => {
                let d = [];
                res.docs.forEach(doc => {
                    d.push({ ...doc.data(), id: doc.id })
                })
                setAllUsers(d);
            }).then(err => {
                console.log(err);
            })
    }, [])



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
                    name: user.displayName,
                    email: user.email,
                    mobile: user.phoneNumber,
                    profilePhoto: user.photoURL,
                    city: '',
                    gender:''
                }
                setDoc(doc(db, 'loginedUser', updateData.email), updateData);
                authDispatch({ type: 'LOGIN', payload: updateData });
                setDoc(doc(db, 'users', updateData.email), updateData);
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
