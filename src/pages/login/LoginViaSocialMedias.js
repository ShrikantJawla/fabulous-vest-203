import { Box } from '@chakra-ui/react'
import React from 'react'
import FacebookLogin from './FaceBookLogin'
import GithubLogin from './GithubLogin'
import GoogleLogIn from './GoogleLogIn'

function LoginViaSocialMedias() {
    return (
        <Box display='flex' w='full' justifyContent='center' gap='5'>
            <GoogleLogIn />
            <FacebookLogin />
            <GithubLogin/>
        </Box>
    )
}

export default LoginViaSocialMedias