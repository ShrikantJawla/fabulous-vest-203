import React from 'react'
import { Box, Button, Container, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from './../components/Navbar';

function NoPageFound() {
    return (
        <Box w='full'>
            <Navbar />
            <Text>No Page Found</Text>
            <Link to='/'><Button variant='outline' colorScheme='orange'>Go to Home Page</Button></Link>
        </Box>
    )
}

export default NoPageFound
