import React from 'react'
import {
    Accordion, AccordionButton, AccordionIcon, AccordionItem,
    AccordionPanel, Box, Center, Divider, HStack, Image, Stack, Text, VStack
} from '@chakra-ui/react';
import TripSelectors from '../components/TripSelectors';
import { BsArrowRight } from 'react-icons/bs';
import Navbar from '../components/Navbar';
import LocationUpdater from './../components/LocationUpdater';
import { AuthContext } from '../Contexts/authContext/authContext';
import { MotionBox, MotionText } from '../components/AnimationsVariants';
import { motion } from 'framer-motion';
const image1 = 'https://zoomcar-assets.zoomcar.com/images/original/a121667db0d5e435e48884b015120bc180a4ad2f.jpg?1661426287'
const image2 = new URL('/public/images/artturi-jalli-Su1gc1A63xE-unsplash.jpg', import.meta.url);
const shadow = 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'



const MotionVStack = motion(VStack)
const MotionHStack = motion(HStack)


function HomePage() {
    const { authState, authDispatch } = React.useContext(AuthContext);
    const [image, setImage] = React.useState(image1);
    React.useEffect(() => {
        if (authState.userDetails.city) authDispatch({ type: 'HANDLELOCATIONUPDATER', payload: false });
    }, [authState.userDetails.city])
    function handleImage(id) {
        if (id === 0) setImage(image1);
        else setImage(image2);
    }
    // console.log(authState.userDetails);
    return (
        <MotionBox variants={BoxExitVariant} initial='initial' animate='animate' exit='exit' w='full' >
            <Navbar />
            {authState.locationUpdater && <LocationUpdater />}
            <Box w='100%' h='650px'
                mb='8'
                backgroundPosition='center' backgroundRepeat='no-repeat'
                backgroundImage={`url(${image})`}
                backgroundSize='cover'
                display='flex'
                justifyContent='center'
                alignItems='end'
            >
                <TripSelectors handleImage={handleImage} />
            </Box>

            <Center width='full' display='flex' flexDir={{ base: 'column', lg: 'row' }} justifyContent='center' p='5' gap='10' mb='8'>
                <MotionVStack variants={StackVariant} initial='hidden' whileInView='viewAtVisible' h={{ base: '200px', md: '248px' }} shadow={shadow} w={{ base: '100%', md: '470px' }} >
                    <HStack >
                        <VStack p={{ base: '4', md: '6' }} >
                            <Text fontWeight='bold' fontSize={{ base: '15px', md: '18px' }}>You and your buddy up for a long drive?</Text>
                            <Text fontSize={{ base: '13px', md: '16px' }}>You earn 500 in Z-Points. Your friend gets 20% off on first booking</Text>
                        </VStack>
                        <Image src='/images/first smaill div img.png' w={{ base: '110px', md: '140px' }} h='100%' />
                    </HStack>
                    <Divider />
                    <HStack py={{ base: '2', md: '2', xl: '4' }} pl='5' w='full'>
                        <BsArrowRight size='22px' color='green' />
                        <Text fontWeight='700' style={{ marginLeft: "15px" }}>REFER FRIENDS</Text>
                    </HStack>
                </MotionVStack>
                <MotionHStack variants={StackVariant} initial='hiddenRightBox' whileInView='viewAtVisible' h={{ base: '200px', md: '248px' }} shadow={shadow} p='5' w={{ base: '100%', md: '470px' }} >
                    <Stack textAlign='left' dir='column'>
                        <Text w='full' fontWeight='bold' fontSize={{ base: '18px', md: '24px' }}>UP TO 20% OFF</Text>
                        <Text fontWeight='700' color='grey' fontSize={{ base: '13px', md: '16px' }} style={{ marginBottom: '10px' }}>on your first booking from the app!</Text>
                        <Text fontSize={{ base: '14px', md: '17px' }} color='grey' fontWeight='bold' style={{ marginBottom: '10px' }} border='1px dashed grey' p='3' w='fit-content'>Use Code:ZOOMNEW</Text>
                        <Text fontWeight='bold' fontSize={{ base: '16px', md: '20px' }} color='green'>Install Zoomcar App now!</Text>
                    </Stack>
                    <Image w={{ base: '100px', md: '140px' }} src='/images/cellphone.png' />
                </MotionHStack>
            </Center>

            <Box w='full' bg='rgba(0, 0, 0, 0.06)' h='fit-content' pt='3' py='3'>
                <Accordion bg='white' mb='10'>
                    <AccordionItem textAlign='center'>
                        <Box display='flex' justifyContent='center' >
                            <AccordionButton w='fit-content' gap='4'>
                                <Box textAlign='left'>
                                    About us
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Box>
                        <AccordionPanel pb={4} display='flex' flexDir='column' gap='4' mt='6'>
                            <Text fontSize='14px'>Zoomcar Team</Text>
                            <Text fontSize='14px'>Zoomcar Subscription</Text>
                            <Text fontSize='14px'>Zoomcar Blog</Text>
                            <Text fontSize='14px'>Careers @ Zoomcar</Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <Box w='76%' m='auto' display='flex' flexDir='column' gap='8'>
                    <VStack textAlign='left'>
                        <Text w='full' fontWeight='bold' fontSize='14px'>SELF DRIVE CAR RENTALS IN BANGALORE</Text>
                        <Text w='full' fontSize='13px'>Bangalore is a burgeoning cosmopolitan city with a young urban population. Besides the all-inclusive feel, the city is witnessing a shifting culture that calls for an equal focus on work and leisure. Almost every work day ends in a relaxing meal with friends, and frequent road trips are the norm. With youngsters increasingly viewing driving as a pleasure rather than a chore, self drive car rentals have emerged as the answer to a prayer. </Text>
                    </VStack>
                    <VStack>
                        <Text w='full' fontWeight='bold' fontSize='14px'>CAR RENTAL IN BANGALORE</Text>
                        <Text w='full' fontSize='13px'>If you love cars, but find it hard to identify one which is perfect for you, Zoomcar serves as an interesting option. We make it possible for you to pick your car based on your travelling needs. While small cars allow you to manoeuvre through city traffic and are ideal for a daily commute, sedans and SUV’s offer more comfort. They are well suited for group travel and can add to the joy of road trips.
                            Take your friends on a memorable trip from Bangalore to Mysore in a spacious SUV from Zoomcar. A definite perk is that Zoomcar comes with limited liability, and relieve you of the financial burden of investing in a four-wheeler while offering the freedom of having a self driven car at your disposal.   When you choose to drive a car in the city, you do away with the hassle of having to coordinate with the drivers who operate traditional car rentals in Bangalore.
                            With Zoomcar you can avoid the need to hire an exorbitantly priced Bangalore airport cab. Bangalore airport boasts of a Zoomcar parking lot where you can opt for a car rental in Bangalore without driver as soon as you get off your flight. Indulge your passion for luxury cars and make every a special occasion memorable by opting to drive a slick luxury car yourself. You could opt for it for the sheer pleasure and experience too!  </Text>
                    </VStack>
                    <VStack>
                        <Text w='full' fontWeight='bold' fontSize='14px'>CAR ON RENT IN BANGALORE</Text>
                        <Text w='full' fontSize='13px'>Your experience with Zoomcar begins with the convenience of online booking. The cars listed on our site come with all India permits, Road Side Assistance (RSA), and include vehicle insurance. It is extremely easy to pick the car as there are multiple parking sites across the city. They also prove to be a safe bet for independent, young women who like to be behind the wheel. Whether you need it for a couple of hours or require it over many days, you can choose the perfect self-drive car.Hire a car in Bangalore through the Zoomcar app or online conveniently for tech-enabled booking, tracking and hassle-free payment options.</Text>
                    </VStack>
                    <VStack>
                        <Text w='full' fontWeight='bold' fontSize='14px'>ABOUT ZOOMCAR</Text>
                        <Text w='full' fontSize='13px'>No more worries about petrol mileage, fuel costs, insurance, and car breakdowns! Zoomcar has enabled driving convenience for travellers around the country and is fast expanding its reach to cities including Ahmedabad, Bangalore, Chandigarh, Chennai, Coimbatore, Delhi-NCR, Hyderabad, Jaipur, Kochi, Kolkata, Ludhiana, Mangalore, Mumbai, Mysore, Pune, Siliguri and Vizag.<br />
                            Self drive cars from Zoomcar have given customers more control, privacy, and freedom. Book a self drive car in any city you visit with the Zoomcar app on your phone and feel at home wherever you go. </Text>
                    </VStack>
                </Box>
            </Box>

            <Box w='full' mt='14' mb='6'>
                <MotionText variants={LastTextVariant} initial='hidden' whileInView='visible' pl='4' color='rgba(0, 0, 0, 0.16)' lineHeight='0.9' fontSize='80px' fontWeight='bold'>Never <br /> Stop <br /> Living.</MotionText>
            </Box>
            <Text w='full' textAlign='center' mb='7'>© Copyright 2022 Zoomcar India Private Ltd. All rights reserved</Text>
        </MotionBox>
    )
}

export default HomePage


const StackVariant = {
    hidden: { opacity: 0, x: -150 },
    hiddenRightBox: { opacity: 0, x: 150 },
    viewAtVisible: {
        opacity: 1, x: 0,
        transition: {
            delay: 0.2,
            duration: 0.5
        }
    }
}


const BoxExitVariant = {
    initial: {
        x: '-100vw',
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.1, duration: 0.5 },
    },
    exit: {
        x: '110vw',
        opacity: 0.2,
        // display:'none',
        transition: {
            delay: 0.1,
            duration: 0.5,
        },
    },
}


const LastTextVariant = {
    hidden: {
        opacity: 0,
        scale: 0.5,
        color: 'black',
    },
    visible: {
        opacity: 1,
        scale: 1,
        color: 'rgba(0, 0, 0, 0.16)',
        transition: {
            color: {
                yoyo: Infinity,
                delay: 0.2,
                duration: 0.5,
                ease: 'easeInOut'
            },
            delay: 0.2,
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}