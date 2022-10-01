import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, VStack, Text, Input, InputLeftElement, InputGroup, Button } from '@chakra-ui/react';
import { BsArrowLeftRight } from 'react-icons/bs';
import { IoAirplaneOutline } from 'react-icons/io5';
import { BiCurrentLocation } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../Contexts/AppContext/AppContext';


function TripSelectors({ handleImage }) {
    const { appState } = useAppContext();
    const navigate = useNavigate();

    function doChange(id) {
        handleImage(id);
    }

    return (
        <Tabs isFitted variant='enclosed' mb='130px' w={{ base: '95%', md: '400px' }} onChange={(id) => { doChange(id) }}>
            <TabList mb='1em' bg='white' h='62px'>
                <Tab p='7'>
                    <VStack>
                        <BsArrowLeftRight />
                        <Text fontSize={{ base: '13px', md: '16px' }}>Round Trip</Text>
                    </VStack>
                </Tab>
                <Tab p='7'>
                    <VStack>
                        <IoAirplaneOutline />
                        <Text fontSize={{ base: '13px', md: '16px' }}>Airport Round Trip</Text>
                    </VStack>
                </Tab>
            </TabList>
            <TabPanels w='450px'>
                <TabPanel h='54px' p='0' mb='5'>
                    <InputGroup h='100%' mb='3'>
                        <InputLeftElement
                            h='100%'
                            pointerEvents='none'
                            children={<BiCurrentLocation color='green' />} />
                        <Input value={appState.location} readOnly onClick={() => { navigate('/locationFinder') }} bg='white' h='100%' />
                    </InputGroup>
                    <Button h='54px' w='full'>FIND CARS</Button>
                </TabPanel>
                <TabPanel h='54px' p='0' mb='5'>
                    <InputGroup h='100%' mb='3'>
                        <InputLeftElement
                            h='100%'
                            pointerEvents='none'
                            children={<BiCurrentLocation color='green' />} />
                        <Input bg='white' h='100%' />
                    </InputGroup>
                    <InputGroup h='100%' mb='3'>
                        <InputLeftElement
                            h='100%'
                            pointerEvents='none'
                            children={<BiCurrentLocation color='green' />} />
                        <Input bg='white' h='100%' />
                    </InputGroup>
                    <Button h='54px' w='full' colorScheme='green'>FIND CARS</Button>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default TripSelectors
