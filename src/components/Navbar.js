import React from 'react'
import { Container, HStack, IconButton, Image, Text, Box, Badge, Spacer } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi'
import SideNav1 from './SideNav1';

function Navbar() {
    return (
        <Box w='full' bg={{ base: 'transparent', lg: 'black' }} pos='fixed' top='0' zIndex='898'>
            <HStack w='full' h='80px' p='7' spacing={3}>
                {/* <IconButton _hover={{ bg: 'grey' }} variant='ghost' color={{ base: "black", lg: 'white' }} icon={<GiHamburgerMenu size='24px' />} /> */}
                <SideNav1 />
                <Image display={{ base: "none", lg: 'block' }} src='/images/Zoom-car-logo edited.png' w='170px' />
                <Spacer />
                <HStack spacing={20}>
                    <Box _hover={{ cursor: 'pointer' }} display={{ lg: 'none' }} py='2' px='4' fontSize='19px' fontWeight='bold' rounded='full' color='white' bg='black'>Host</Box>
                    <Box _hover={{ cursor: 'pointer' }} display={{ base: "none", lg: 'flex' }} py='2' px='4' fontSize='19px' fontWeight='500' rounded='full' bg='white'>Become a Host</Box>
                    <Box _hover={{ cursor: 'pointer' }} display={{ base: "none", lg: 'flex' }} color='white' fontWeight='bold' fontSize='19px'>ZMS</Box>
                    <Box _hover={{ cursor: 'pointer' }} display={{ base: "none", lg: 'flex' }} color='white' fontWeight='bold' fontSize='19px'>Login/Signup</Box>
                </HStack>
            </HStack>
        </Box>
    )
}

export default Navbar
