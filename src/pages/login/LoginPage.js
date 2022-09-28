import React from 'react'
import {
    Box, FormControl, FormLabel, Image, Input, InputGroup, InputLeftAddon, Text, VStack, Center,
    Tabs, TabList, TabPanels, Tab, TabPanel, Button, FormErrorMessage, FormHelperText
} from '@chakra-ui/react';
import { auth } from '../../Configs/firebaseConfigs';
import PhoneLogin from './PhoneLogin';
import SignUpAndLoginPage from './SignUpAndLoginPage';
const shadow = 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
const inputShadow = 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'
function LoginPage() {

    return (
        <Center w='100vw' h='100vh'
            backgroundImage={`url(images/login-photo.svg)`}
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            backgroundPosition='center'
        >
            <VStack w='50%' bg='#FFFFFF' p='5' shadow={shadow} rounded='15px'>
                <Text fontSize='19px'>Enter details to login/sign-up</Text>
                <Tabs isFitted variant='enclosed' w='70%' fontWeight='bold'>
                    <TabList mb='1em' color='black' rounded='10px'>
                        <Tab>Phone Login</Tab>
                        <Tab>Login with email</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <PhoneLogin />
                        </TabPanel>
                        <TabPanel>
                            <SignUpAndLoginPage />
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </VStack>
        </Center>
    )
}

export default LoginPage
