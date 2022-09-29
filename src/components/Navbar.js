import React from 'react'
import { HStack, Image, Box, Spacer, Avatar, Text } from '@chakra-ui/react';
import SideNav1 from './SideNav1';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/authContext/authContext';
import { BsPersonCircle } from 'react-icons/bs';

function Navbar() {
    const { authState } = React.useContext(AuthContext);
    // console.log(authState.userDetails);

    function profileUpdate() {
        let profile;
        if (!authState.isAuth) {
            profile = <Link to='/login'><Box _hover={{ cursor: 'pointer' }} display={{ base: "none", lg: 'flex' }} color='white' fontWeight='bold' fontSize='19px'>Login/Signup</Box></Link>
        }
        else if (authState.isAuth) {
            if (!authState.userDetails.name) {
                profile = <Box _hover={{ cursor: 'pointer' }} display={{ base: "none", lg: 'flex' }} alignItems='center' gap='2' color='white' fontWeight='bold' fontSize='19px'>
                    <Link to='/profile'><Text>{authState.userDetails.mobile.slice(3)}</Text></Link>
                    <BsPersonCircle size='29px' />
                </Box>
            } else {
                profile = <Box _hover={{ cursor: 'pointer' }} display={{ base: "none", lg: 'flex' }} alignItems='center' gap='2' color='white' fontWeight='bold' fontSize='19px'>
                    <Link to='/profile'><Text>{authState.userDetails.name}</Text></Link>
                    <Avatar size='md' src={authState.userDetails.profilePhoto} />
                </Box>
            }
        }
        return profile;
    }


    return (
        <Box w='full' bg={{ base: 'transparent', lg: 'black' }} pos='fixed' top='0' zIndex='898'>
            <HStack w='full' h='80px' p='7' spacing={3}>
                {/* <IconButton _hover={{ bg: 'grey' }} variant='ghost' color={{ base: "black", lg: 'white' }} icon={<GiHamburgerMenu size='24px' />} /> */}
                <SideNav1 />
                <Link to='/'><Image display={{ base: "none", lg: 'block' }} src='/images/Zoom-car-logo edited.png' w='170px' /></Link>
                <Spacer />
                <HStack spacing={{base:'none',lg:20}}>
                    <Box _hover={{ cursor: 'pointer' }} display={{ lg: 'none' }} py='2' px='4' fontSize='19px' fontWeight='bold' rounded='full' color='white' bg='black'>Host</Box>
                    <Box _hover={{ cursor: 'pointer' }} display={{ base: "none", lg: 'flex' }} py='2' px='4' fontSize='19px' fontWeight='500' rounded='full' bg='white'>Become a Host</Box>
                    <Box _hover={{ cursor: 'pointer' }} display={{ base: "none", lg: 'flex' }} color='white' fontWeight='bold' fontSize='19px'>ZMS</Box>
                    {profileUpdate()}
                </HStack>
            </HStack>
        </Box>
    )
}

export default Navbar
