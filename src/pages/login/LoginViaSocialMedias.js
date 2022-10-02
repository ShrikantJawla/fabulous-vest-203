import { VStack } from '@chakra-ui/react'
import React from 'react'
import FacebookLogin from './FaceBookLogin'
import GithubLogin from './GithubLogin'
import GoogleLogIn from './GoogleLogIn'
import TwitterLogin from './TwitterLogin'

function LoginViaSocialMedias() {
    return (
        <VStack w='full' justifyContent='center' gap='5'>
            <GoogleLogIn />
            <FacebookLogin />
            {/* <TwitterLogin/> */}
        </VStack>
    )
}

export default LoginViaSocialMedias
