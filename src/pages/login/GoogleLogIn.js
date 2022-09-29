import React from 'react'
import { Box, IconButton } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc'
import { auth } from './../../Configs/firebaseConfigs';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/authContext/authContext';
import { collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from '../../Configs/firebaseConfigs';





function GoogleLogIn() {
    const navigate = useNavigate();
    const [allUsers, setAllUsers] = React.useState([]);
    const { authState, authDispatch, handleFormsToggle, toggleAuthForms } = React.useContext(AuthContext);
    const provider = new GoogleAuthProvider(auth);

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
                const credential = GoogleAuthProvider.credentialFromResult(result);
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
                    city:''
                }

                setDoc(doc(db, 'loginedUser', updateData.email), updateData);
                //reducer login action
                authDispatch({ type: 'LOGIN', payload: updateData });

                //Receiving the data from firebase and checking the validation
                // let flag = true;
                // allUsers.forEach(ele => {
                //     if (ele.email === updateData.email) {
                //         flag = false;
                //     }
                //     if (flag) addDoc(collection(db, 'users'), updateData);
                // })
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
                const credential = GoogleAuthProvider.credentialFromError(error);
                alert('something went wrong');
                authDispatch({ type: 'LOADED' });
                // ...
            });
    }


    return (
        <Box >
            <IconButton onClick={handleSubmit} variant='outline' size='lg' icon={<FcGoogle size='28px' />} />
        </Box>
    )
}

export default GoogleLogIn
