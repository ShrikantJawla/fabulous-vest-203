import React from 'react'
import { Box, Button, FormControl, FormErrorMessage, FormHelperText, Input, InputGroup, InputLeftElement, InputLeftAddon, Text, IconButton } from '@chakra-ui/react';
import { auth, setItemWithId } from '../Configs/firebaseConfigs';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { AuthContext } from '../Contexts/authContext/authContext';
import styled from 'styled-components'



const inputShadow = 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'

const initialState = {
    name: '',
    email: '',
    password: ''
}
function SignUp() {
    const [user, setUser] = React.useState(initialState);
    const [loading, setLoading] = React.useState(false);
    const { authState, authDispatch, handleFormsToggle, toggleAuthForms } = React.useContext(AuthContext);

    async function setUserWithId(id, data) {
        setItemWithId(id, data);

    }

    function handleSubmit() {
        // authDispatch({ type: 'LOADING' });
        setLoading(true);
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed in 
                const SignedUpUser = userCredential.user;
                let updateData = {
                    ...authState.userDetails,
                    email: SignedUpUser.email,
                    name: user.name
                }
                setUserWithId(SignedUpUser.email, updateData);
                // console.log(user.accessToken);
                if (SignedUpUser.accessToken) handleFormsToggle(true);
                authDispatch({ type: 'LOGIN', payload: updateData });
                // authDispatch({ type: 'LOADED' });
                setLoading(false);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorMessage)
                // authDispatch({ type: 'LOADED' });
                setLoading(false);
                alert('something went wrong');
                handleFormsToggle(false);
            });
        setUser(initialState);
    }

    return (
        <Box display='flex' flexDir='column' gap='3'>
            <Text>Sign Up</Text>
            <FormControl isInvalid={false}>
                <Input value={user.name} onChange={(e) => { setUser({ ...user, name: e.target.value }) }} type='text' placeholder='Enter Name' shadow={inputShadow} />
                <FormErrorMessage>Please enter your name</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={false}>
                <InputGroup shadow={inputShadow}>
                    <InputLeftAddon
                        color={'green'}
                        fontSize='19px'
                        pointerEvents='none'
                        children='@'
                    />
                    <Input value={user.email} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} type='email' placeholder='Enter Email' />
                </InputGroup>
                <FormErrorMessage>Please enter your name</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={false}>
                <InputGroup shadow={inputShadow}>
                    <InputLeftAddon
                        color={'green'}
                        fontSize='19px'
                        pointerEvents='none'
                        children='**'
                    />
                    <Input value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} type='password' placeholder='Enter password' />
                </InputGroup>
                <FormErrorMessage>Please enter your name</FormErrorMessage>
            </FormControl>
            <Button isLoading={loading} onClick={handleSubmit} variant='outline' colorScheme={'facebook'}>Sign Up</Button>
            <Box textAlign='right'><Text color='grey' fontWeight='normal' fontSize='14px'>Navigate to <CustomSpan onClick={() => { handleFormsToggle(true) }}>Sign In</CustomSpan></Text></Box>
        </Box>
    )
}

export default SignUp

const CustomSpan = styled.span`
    font-size: 17px;
    text-decoration: underline;
    color:blue;
    :hover{
        cursor: pointer;
        color:#E53E3E;
    }

`