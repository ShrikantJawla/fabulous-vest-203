import React from 'react'
import { Box, Button, FormControl, FormErrorMessage, FormHelperText, Input, InputGroup, InputLeftElement, InputLeftAddon, Text } from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Configs/firebaseConfigs';
import { AuthContext } from '../Contexts/authContext/authContext';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
const inputShadow = 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'

const initialState = {
    email: '',
    password: ''
}
function SignIn() {
    const [loading, setLoading] = React.useState(false);
    const [user, setUser] = React.useState(initialState);
    const { authState, authDispatch, handleFormsToggle } = React.useContext(AuthContext);
    const navigate = useNavigate();

    function handleSubmit() {
        // authDispatch({ type: 'LOADING' });
        setLoading(true);
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user.email)
                
                let updateData = {
                    email:user.email,
                }
                localStorage.setItem('loginedUser', JSON.stringify(updateData));
                authDispatch({ type: 'LOGIN', payload: updateData });
                // authDispatch({ type: 'LOADED' });
                setLoading(false);
                navigate('/');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // authDispatch({ type: 'LOADED' });
                setLoading(false);
                alert('something went wrong!')
            });
        setUser(initialState);
    }


    return (
        <Box display='flex' flexDir='column' gap='3'>
            <Text>Sign In</Text>
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
            <Button isLoading={loading} onClick={handleSubmit} variant='outline' colorScheme={'facebook'}>Sign In</Button>
            <Box textAlign='right'><Text color='grey' fontWeight='normal' fontSize='14px'>Navigate to <CustomSpan onClick={() => { handleFormsToggle(false) }}>Sign Up</CustomSpan></Text></Box>
        </Box>
    )
}

export default SignIn


const CustomSpan = styled.span`
    font-size: 17px;
    text-decoration: underline;
    color:blue;
    :hover{
        cursor: pointer;
        color:#E53E3E;
    }

`