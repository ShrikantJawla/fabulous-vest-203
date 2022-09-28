import React from 'react'
import firebase from 'firebase/compat/app';
import { auth } from '../../Configs/firebaseConfigs';
import {
    Box, FormControl, FormLabel, Image, Input, InputGroup, InputLeftAddon, Text, VStack, Center,
    Tabs, TabList, TabPanels, Tab, TabPanel, Button, FormErrorMessage, FormHelperText
} from '@chakra-ui/react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/authContext/authContext';

const shadow = 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
const inputShadow = 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'

// let num = '+14564564564'

function PhoneLogin() {

    const [isValid, setIsValid] = React.useState(false);
    const [mobNum, setMobNum] = React.useState('');
    const [otp, setOtp] = React.useState(0)
    const [takeOtp, setTakeOtp] = React.useState(false);
    let navigate = useNavigate();
    const { authState, authDispatch } = React.useContext(AuthContext);
    // console.log(authState);

    function handleInputMobNum(e) {
        setMobNum(e.target.value);
        if (e.target.value.length > 10) {
            setIsValid(true);
        } else if (e.target.value.length <= 10) setIsValid(false);
    }

    function genrateRecapta() {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // ...
            },
            'expired-callback': () => {
                // Response expired. Ask user to solve reCAPTCHA again.
                // ...
                console.log('solve again')
            }
        }, auth);
    }

    function handleNumSubmit() {
        if (mobNum.length < 10) return;
        authDispatch({ type: 'LOADING' });
        genrateRecapta();
        signInWithPhoneNumber(auth, `+91${mobNum}`, window.recaptchaVerifier)
            .then((res) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = res;
                window.id = res.verificationId;
                if (res.verificationId) setTakeOtp(true);
                authDispatch({ type: 'LOADED' });
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                alert('Something went wrong!');
                setTakeOtp(false);
                console.log(error);
            });


    }


    function handleInputOtp(e) {
        if (otp.length === 6) {
            authDispatch({ type: 'LOADING' });
            window.confirmationResult.confirm(otp).then((result) => {
                // User signed in successfully.
                const user = result.user;
                // console.log(user);
                const userDetails = {
                    name: user.displayName,
                    mobile: user.phoneNumber,
                    profilePhoto: user.photoURL,
                    email: user.email,
                    gender: 'Male',
                    token: user.accessToken,
                }
                authDispatch({ type: 'LOADED' });
                authDispatch({ type: 'LOGIN', payload: userDetails });
                navigate('/');
                // ...
            }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                alert('wrong otp');
                authDispatch({ type: 'LOADED' });
                setTakeOtp(false);
                // navigate('/login');
            });
        }
    }



    return (
        <>
            {!takeOtp ? <Box><FormControl mb='1' isInvalid={isValid}>
                <InputGroup shadow={inputShadow} >
                    <InputLeftAddon children='+91' color='red' />
                    <Input type='tel' placeholder='phone number' value={mobNum} onChange={handleInputMobNum} />
                </InputGroup>
                <Box display='flex' justifyContent='center' mt='1' id='recaptcha-container'></Box>
                <FormErrorMessage>Please enter a valid mobile number</FormErrorMessage>
            </FormControl>
                <Button isLoading={authState.loading} onClick={handleNumSubmit} mb='3' w='full' variant='outline' colorScheme='messenger'>Send OTP</Button>
            </Box>
                :
                <Box>
                    <FormControl mb='2'>
                        <Input onChange={(e) => { setOtp(e.target.value) }} shadow={inputShadow} type='tel' placeholder='Enter OTP' />
                        <FormHelperText>Enter valid 6 digit number</FormHelperText>
                    </FormControl>
                    <Button isLoading={authState.loading} onClick={handleInputOtp} w='full' variant='outline' colorScheme='messenger'>Sign In</Button>
                </Box>}
        </>
    )
}

export default PhoneLogin
