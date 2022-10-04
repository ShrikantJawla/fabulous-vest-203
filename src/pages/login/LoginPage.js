import React from 'react'
import Navbar from '../../components/Navbar';
import NewLoginPage from '../NewLoginPage';
import { BoxExitVariant, MotionBox } from '../../components/AnimationsVariants';
import { AuthContext } from '../../Contexts/authContext/authContext';

function LoginPage() {
    const { authState } = React.useContext(AuthContext);
    return (
        <MotionBox variants={BoxExitVariant} initial='initial' animate='animate' w='100vw' h='100vh'
            backgroundImage={`url(images/login-photo.svg)`}
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            backgroundPosition='center'
        >
            <Navbar />
            {/* <VStack h="450px" w={{base:'99%',sm:'80%',md:'75%',lg:'50%'}} bg='#FFFFFF' p='5' shadow={shadow} rounded='15px'>
                <Text fontSize='19px'>Enter details to login/sign-up</Text>
                <Tabs isFitted variant='enclosed' w={{base:'90%',md:'70%'}} fontWeight='bold'>
                    <TabList mb='1em' color='black' rounded='10px' >
                        <Tab fontSize='14px'>Phone Login</Tab>
                        <Tab fontSize='14px'>Login via email</Tab>
                        <Tab fontSize='14px'>Login via SocialMedia</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <PhoneLogin />
                        </TabPanel>
                        <TabPanel>
                            <SignUpAndLoginPage />
                        </TabPanel>
                        <TabPanel>
                            <LoginViaSocialMedias />
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </VStack> */}
            <NewLoginPage />
        </MotionBox>
    )
}

export default LoginPage
