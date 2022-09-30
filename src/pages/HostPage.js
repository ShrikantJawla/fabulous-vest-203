import { Box, Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar'
import { Carousel } from 'react-responsive-carousel';
const buttonColor = '#10A310'

function customButton(text) {
    return <Button size='lg' variant='solid' color='white' bg={'#10A310'}>{text}</Button>
}


function HostPage() {
    return (
        <Box w='full'>
            <Navbar />
            <Box w='85%' m='auto'>
                {/* First Photo of Page */}
                <Box pt='70px' mb='8'>
                    <Box
                        h='400px'
                        backgroundImage={`url(/images/host-page-first-image.jpg)`}
                        backgroundRepeat='no-repeat'
                        backgroundSize='cover'
                        pt='100px'
                        px='70px'
                    >
                        <Heading color='white' mb='7'>
                            Share your car and earn <br /> up to Rs 50,000 per month
                        </Heading>
                        <Text mb='6' color='white'>7 seater cars get ans additional joining bonus of Rs 7500 on sign-up</Text>
                        {customButton('START EARNING')}
                    </Box>
                </Box>
                {/* Vedio part */}
                <Box h='400px' boxShadow='lg' mb='10'>
                    <video style={{ width: '100%', height: '100%' }} muted preload='auto' loop controls autoPlay src='/videos/64440836bb2a2ee19961407349dece57.mp4'></video>
                </Box>
                <Box mb='14'>
                    <Image src='/images/host-page-earning-related-image.webp' />
                </Box>

                {/* 3 Simple Steps */}
                <Box w='85%' m='auto' mb='20'>
                    <Heading mb='10' lineHeight={1.6} textAlign='center' fontWeight='700' fontSize='40px'>3 Simple steps to start Earning with your car in 24 hours</Heading>
                    <HStack justify='space-between' mb='10'>
                        <VStack alignItems='flex-start'>
                            <Text fontWeight='700' fontSize='21px'>1. Sign up for Free!</Text>
                            <Text>Become part of the Zoomcar Host program for absolutely free <br /> by filling up a short <span>form</span>  after sign-up. It takes less than 2 <br /> mins to fill the form. No hidden charges.</Text>
                        </VStack>
                        <Image src='/images/host-page-signup-image.svg' />
                    </HStack>
                    <HStack justify='space-between' mb='10'>
                        <Image src='/images/host-page-account-sharing-mage.svg' />
                        <VStack alignItems='flex-start'>
                            <Text fontWeight='700' fontSize='21px'>2. Set your account for sharing</Text>
                            <Text>Once you have signed up on the app, you can download the <br /> Zoomcar Host app and within 2-4 business hours, your profile <br /> will be available for login. Provide your KYC details & sharing <br /> location and you are now ready to share your car</Text>
                        </VStack>
                    </HStack>
                    <HStack justify='space-between' mb='10'>
                        <VStack alignItems='flex-start'>
                            <Text fontWeight='700' fontSize='21px'>3. Share your car and Earn</Text>
                            <Text>Share your car through the app by selecting the dates when <br /> your car is available. Our experts will visit your location at the <br /> start of sharing and install the safety devices in your car. Now <br /> you are ready to receive bookings and earn</Text>
                        </VStack>
                        <Image w='350px' src='/images/host-page-share-your-car-image.svg' />
                    </HStack>
                </Box>

                {/* Crousel part */}
                <Box mb='20'>
                    <Heading>How we protect your car</Heading>
                    <HStack overflow='auto' h='400px' boxShadow='lg'>
                        <VStack>
                            <Image w='300px' src='/images/host-page-damage-repair-image.svg'/>
                            <VStack align='flex-start' w='360px'>
                                <Text fontWeight='bold'>We cover major damages & repair</Text>
                                <Text>Zoomcar provides damage cover and repair handling in case of an unlikely incident of any accident incurred by a guest during the sharing period/when your car is serving a booking.</Text>
                            </VStack>
                        </VStack>
                        <VStack>
                            <Image w='300px' src='/images/host-page-car-stay-image.svg'/>
                            <VStack align='flex-start' w='360px'>
                                <Text fontWeight='bold'>Your Car Stays in Safe Hands!</Text>
                                <Text>All our renters are verified individuals with valid Driving license, and have excellent driving stats in the past on our platform. We have complete contact and address details of all our renters.</Text>
                            </VStack>
                        </VStack>
                        <VStack>
                            <Image w='300px' src='/images/host-page-contactless-sharing.svg'/>
                            <VStack align='flex-start' w='360px'>
                                <Text fontWeight='bold'>Contactless sharing</Text>
                                <Text>Our Keyless technology enables contactless pick-up & drop of your car.</Text>
                            </VStack>
                        </VStack>
                        <VStack>
                            <Image w='300px' src='/images/host-page-flexibility-sharing.svg'/>
                            <VStack align='flex-start' w='360px'>
                                <Text fontWeight='bold'>Flexibility in sharing</Text>
                                <Text>Share your car whenever you want, as per your usage and convenience</Text>
                            </VStack>
                        </VStack>
                        <VStack>
                            <Image w='300px' src='/images/host-page-27x7-support.svg'/>
                            <VStack align='flex-start' w='360px'>
                                <Text fontWeight='bold'>24 x 7 customer support</Text>
                                <Text>Call us, Chat with us, drop an Email to us, we've got your back round the clock!</Text>
                            </VStack>
                        </VStack>
                    </HStack>
                </Box>

                
            </Box>
        </Box>
    )
}

export default HostPage
