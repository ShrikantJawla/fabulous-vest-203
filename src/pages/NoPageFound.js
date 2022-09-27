import React from 'react'
import { Button, Container, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NoPageFound() {
    return (
        <Container>
            <Text>No Page Found</Text>
            <Link to='/'><Button variant='outline' colorScheme='orange'>Go to Home Page</Button></Link>
        </Container>
    )
}

export default NoPageFound
