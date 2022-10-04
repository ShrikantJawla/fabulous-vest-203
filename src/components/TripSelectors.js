import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, VStack, Text, Input, InputLeftElement, InputGroup, Button } from '@chakra-ui/react';
import { BsArrowLeftRight } from 'react-icons/bs';
import { IoAirplaneOutline } from 'react-icons/io5';
import { BiCurrentLocation } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../Contexts/AppContext/AppContext';
import DateAndTimePicker from './DateAndTimePicker';
import { motion } from 'framer-motion';

const MotionTabs = motion(Tabs);

function TripSelectors({ handleImage }) {
    const { appState } = useAppContext();
    const navigate = useNavigate();

    function doChange(id) {
        handleImage(id);
    }

    const handleFindCars = () => {

    }

    return (
        <MotionTabs isFitted initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} variant='enclosed' mb='190px' w={{ base: '95%', md: '400px' }} onChange={(id) => { doChange(id) }}>
            <TabList mb='10px' bg='white' h='62px'>
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
                    <InputGroup h='100%' mb='1'>
                        <InputLeftElement
                            h='100%'
                            pointerEvents='none'
                            children={<BiCurrentLocation color='green' />} />
                        <Input value={appState.location} readOnly onClick={() => { navigate('/locationFinder') }} bg='white' h='100%' placeholder='Enter the Pickup Location' />
                    </InputGroup>
                    {appState.location && <InputGroup h='100%' mb='1'>
                        <InputLeftElement
                            h='100%'
                            pointerEvents='none'
                            children={<BiCurrentLocation color='red' />} />
                        <Input value={appState.dropLocation} readOnly onClick={() => { navigate('/dropLocation') }} bg='white' h='100%' placeholder='Enter the Drop Location' />
                    </InputGroup>}
                    {appState.location && appState.dropLocation && <DateAndTimePicker />}
                    <Button onClick={handleFindCars} h='54px' w='full'>FIND CARS</Button>
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
        </MotionTabs>
    )
}

export default TripSelectors
