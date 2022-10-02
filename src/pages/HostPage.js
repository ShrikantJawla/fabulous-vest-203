import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Heading, HStack, IconButton, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar'
import { HiOutlineShare } from 'react-icons/hi'
const buttonColor = '#10A310'

function customButton(text) {
    return <Button borderRadius='5' fontSize={15} _hover={{ bg: 'green' }} size='lg' variant='solid' color='white' bg={buttonColor}>{text}</Button>
}


function HostPage() {
    return (
        <Box w='full'>
            <Navbar />
            <Box w={{ base: '99%', lg: '85%' }} m='auto'>
                {/* First Photo of Page */}
                <Box pt='70px' mb='8'>
                    <Box
                        h='400px'
                        backgroundImage={`url(/images/host-page-first-image.jpg)`}
                        backgroundRepeat='no-repeat'
                        backgroundSize={{ base: 'auto', lg: 'cover' }}
                        pt={{ base: '5', lg: '100px' }}
                        px={{ base: '5', lg: '70px' }}
                    >
                        <Heading fontSize={{ base: '23px', lg: '40px' }} color='white' mb='7'>
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
                <Box mb='14' h={{ base: '170px', lg: 'auto' }}>
                    <Image h='full' src='/images/host-page-earning-related-image.webp' />
                </Box>

                {/* 3 Simple Steps */}
                <Box w='85%' m='auto' mb='20'>
                    <Heading mb='10' lineHeight={1.6} textAlign='center' fontWeight='700' fontSize={{ base: '24px', lg: '40px' }}>3 Simple steps to start Earning with your car in 24 hours</Heading>
                    <Stack direction={{ base: 'column', lg: 'row' }} justify='space-between' mb='10' spacing={4}>
                        <VStack alignItems='flex-start'>
                            <Text fontWeight='700' fontSize='21px'>1. Sign up for Free!</Text>
                            <Text>Become part of the Zoomcar Host program for absolutely free <br /> by filling up a short <span>form</span>  after sign-up. It takes less than 2 <br /> mins to fill the form. No hidden charges.</Text>
                        </VStack>
                        <Image src='/images/host-page-signup-image.svg' />
                    </Stack>
                    <Stack direction={{ base: 'column', lg: 'row' }} justify='space-between' mb='10' spacing={4}>
                        <Image src='/images/host-page-account-sharing-mage.svg' />
                        <VStack alignItems='flex-start'>
                            <Text fontWeight='700' fontSize='21px'>2. Set your account for sharing</Text>
                            <Text>Once you have signed up on the app, you can download the <br /> Zoomcar Host app and within 2-4 business hours, your profile <br /> will be available for login. Provide your KYC details & sharing <br /> location and you are now ready to share your car</Text>
                        </VStack>
                    </Stack>
                    <Stack direction={{ base: 'column', lg: 'row' }} justify='space-between' mb='10' spacing={4}>
                        <VStack alignItems='flex-start'>
                            <Text fontWeight='700' fontSize='21px'>3. Share your car and Earn</Text>
                            <Text>Share your car through the app by selecting the dates when <br /> your car is available. Our experts will visit your location at the <br /> start of sharing and install the safety devices in your car. Now <br /> you are ready to receive bookings and earn</Text>
                        </VStack>
                        <Image w='350px' src='/images/host-page-share-your-car-image.svg' />
                    </Stack>
                </Box>

                {/* Crousel part */}
                <Box mb='20'>
                    <Heading fontSize={{ base: '24px', lg: '40px' }}>How we protect your car</Heading>
                    <HStack overflow='auto' h='400px' boxShadow='lg' px='4'>
                        <VStack>
                            <Image w='300px' src='/images/host-page-damage-repair-image.svg' />
                            <VStack align='flex-start' w='360px'>
                                <Text fontWeight='bold'>We cover major damages & repair</Text>
                                <Text>Zoomcar provides damage cover and repair handling in case of an unlikely incident of any accident incurred by a guest during the sharing period/when your car is serving a booking.</Text>
                            </VStack>
                        </VStack>
                        <VStack>
                            <Image w='300px' src='/images/host-page-car-stay-image.svg' />
                            <VStack align='flex-start' w='360px'>
                                <Text fontWeight='bold'>Your Car Stays in Safe Hands!</Text>
                                <Text>All our renters are verified individuals with valid Driving license, and have excellent driving stats in the past on our platform. We have complete contact and address details of all our renters.</Text>
                            </VStack>
                        </VStack>
                        <VStack>
                            <Image w='300px' src='/images/host-page-contactless-sharing.svg' />
                            <VStack align='flex-start' w='360px'>
                                <Text fontWeight='bold'>Contactless sharing</Text>
                                <Text>Our Keyless technology enables contactless pick-up & drop of your car.</Text>
                            </VStack>
                        </VStack>
                        <VStack>
                            <Image w='300px' src='/images/host-page-flexibility-sharing.svg' />
                            <VStack align='flex-start' w='360px'>
                                <Text fontWeight='bold'>Flexibility in sharing</Text>
                                <Text>Share your car whenever you want, as per your usage and convenience</Text>
                            </VStack>
                        </VStack>
                        <VStack>
                            <Image w='300px' src='/images/host-page-27x7-support.svg' />
                            <VStack align='flex-start' w='360px'>
                                <Text fontWeight='bold'>24 x 7 customer support</Text>
                                <Text>Call us, Chat with us, drop an Email to us, we've got your back round the clock!</Text>
                            </VStack>
                        </VStack>
                    </HStack>
                </Box>

                <VStack mb='20'>
                    <Heading py='15' alignSelf='flex-start'>Growing rapidly</Heading>
                    <Text alignSelf='flex-start' color='grey' py={3}>Join Host program and be part of the largest tech enabled car sharing marketplace.</Text>
                    <Stack direction={{ base: 'row' }} flexWrap={{ base: 'wrap', lg: 'nowrap' }} px={4} justify='center' align='space-evenly'>
                        <VStack spacing={9} borderRight={{ base: 'none', sm: '1px solid grey' }} p={4} h='200px' w={{ base: '147px', lg: '270px' }}>
                            <Image src='/images/host-page--25000-icon.png' />
                            <Text fontSize={24} fontWeight={500}>25000+</Text>
                            <Text color='grey'>Satisfied hosts</Text>
                        </VStack>
                        <VStack spacing={9} borderRight={{ base: 'none', sm: '1px solid grey' }} p={4} h='200px' w={{ base: '140px', lg: '270px' }}>
                            <Image src='/images/host-page-500000+-icon.png' />
                            <Text fontSize={24} fontWeight={500}>25000+</Text>
                            <Text color='grey'>Booking served</Text>
                        </VStack>
                        <VStack spacing={9} borderRight={{ base: 'none', sm: '1px solid grey' }} p={4} h='200px' w={{ base: '140px', lg: '270px' }}>
                            <Image src='/images/host-page-32cr-icon.png' />
                            <Text fontSize={24} fontWeight={500}>25000+</Text>
                            <Text color='grey'>KMs Run</Text>
                        </VStack>
                        <VStack spacing={9} p={4} h='200px' w={{ base: '140px', lg: '270px' }}>
                            <Image src='/images/host-page-300cr-icon.png' />
                            <Text fontSize={24} fontWeight={500}>25000+</Text>
                            <Text color='grey'>Earned by hosts</Text>
                        </VStack>
                    </Stack>
                </VStack>

                {/* share your XUV */}

                <VStack align='flex-start' spacing={5} px={5} mb={20}>
                    <Heading fontWeight={600} fontSize={{ base: 23, lg: 45 }}>Share your <span style={{ color: '#10A310' }}>XUV 500</span><br /> and earn up to <span style={{ color: '#10A310' }}>Rs 49980</span> per month</Heading>
                    {customButton('CALCULATE EARNING')}
                </VStack>

                {/* Refer and earn */}
                <VStack mb={20} borderRadius='10' p={12} backgroundImage='linear-gradient(270deg,#444,#000)'>
                    <Stack direction={{base:'column',md:'row'}} w="full" justify='space-between' spacing={{base:7,lg:'1'}}>
                        <VStack align='flex-start'>
                            <Heading fontSize={{base:'20px',lg:''}} fontWeight={600} color='white'>You Earn Rs 4999/- <br /> Your Friend Gets upto <br /> Rs 4999/- <br />
                            </Heading>
                            <Text fontSize='18px' fontWeight='normal' color='white'>Your Both Win</Text>
                            {customButton('REFER AND EARN')}
                        </VStack>
                        <Image style={{ marginRight: '140px' }} w={350} src='/images/host-page-earn-4000-image.webp' />
                    </Stack>
                    <Text fontSize='15px' color='white'>This opportunity is for your friends in Bangalore, Pune, Delhi NCR, Mumbai, Chennai, Hyderabad, Chandigarh, Kolkata, Ahmedabad, Coimbatore, Indore, Jaipur, Mangalore, Mysore, Vizag, Goa, Nagpur, Kochi, Vijayawada, Siliguri, Bhopal, Lucknow, Guwahati, <br />
                        Bhubaneswar, Vadodara, Nashik, Trichy & Madurai only. <br />
                        Refer multiple friends to earn upto ₹ 1 Lakh.
                    </Text>
                    <HStack position='relative' right='-45%' bottom='40px'>
                        <Box>
                            <Image w='27px' src='/images/wattsapp-icon.svg' />
                        </Box>
                        <Box>
                            <HiOutlineShare color='white' />
                        </Box>
                    </HStack>
                </VStack>

                <VStack bg='#f5f5f5' w='full' height='400px' mb='20' pt='20'>
                    <Text fontSize={{base:22,lg:25}} fontWeight={600}>Users love Zoomcar Host program. Our app has 4.5+ rating on play store!</Text>
                    <video style={{ width: '100%', height: '100%' }} loop autoPlay src='/videos/host-page-stars-video.mp4' ></video>
                </VStack>

                <HStack pt='8' bg='#f5f5f5' overflow='auto' w='full' mb='20' h='800px' spacing='4'>
                    <VStack h='full' w='250px'>
                        <Text w='250px' fontSize={20} fontWeight='600'>What are the host users saying?</Text>
                        <Text w='250px'>10,000+ hosts are earning average of ₹ 50,000 per month</Text>
                    </VStack>
                    <VStack h='full'>
                        <Image w='full' src='/images/host-page-reduces-emi-burdon.png' />
                        <VStack w='250px'>
                            <Text>I always dreamt of owning a car in which I can take my family for a drive, But, due to high  EMIs, I couldn't afford a car. With host program, I reduced my EMI by sharing the car on weekdays and take my family out on weekends. I am happy that I could finally realise my dream, thanks to host.</Text>
                            <Text color='grey'>Gajendra Tomar, Age 38br <br />
                                Govt School Teacher, Pune
                            </Text>
                        </VStack>
                    </VStack >
                    <VStack h='full'>
                        <Image w='full' src='/images/environment-friendly-image.png' />
                        <VStack w='250px'>
                            <Text >I am an environmentally conscious person. I saw a wonderful opportunity to do something for  congested roads and the environment with host program. Sharing my second car on host helps me to reduce traffic and reduce my carbon footprint. And yes, additional earning through my second car ischerry on the cake :)</Text>
                            <Text color='grey'>
                                Srikanth Venkatesh, Age 43 <br />
                                VP in an IT Company, Hyderabad
                            </Text>
                        </VStack>
                    </VStack>
                    <VStack h='full'>
                        <Image w='full' src='/images/host-page-makes-car-affordable.png' />
                        <VStack w='250px'>
                            <Text>I bought a car recently. But, ended up using it only once or twice a week for errands and  grocery visits. I saw a great way to earn additional money through the host program while also having the car to myself on weekends for my grocery visits. It is a win-win situation for me.</Text>
                            <Text color='grey'>
                                Srikanth Venkatesh, Age 43 <br />
                                VP in an IT Company, Hyderabad
                            </Text>
                        </VStack>
                    </VStack>
                    <VStack h='full'>
                        <Image w='full' src='/images/host-page-additional-earning.png' />
                        <VStack w='250px'>
                            <Text>I am a travel enthusiast and use my car to explore new places. I prefer taking public transport           to office, because of which my car stays idle during the weekdays. So, I decided to share my car on host.           Now, I earn extra bucks for my travel expenses :)</Text>
                            <Text color='grey'>
                                Shishir Gupta, Age 28 <br />
                                Young urban professional, Pune
                            </Text>
                        </VStack>
                    </VStack >
                    <VStack h='full'>
                        <Image w='full' src='/images/host-page-earn-pocket-money.png' />
                        <VStack w='250px'>
                            <Text>My parents gave me a car so that I can commute safely to college. Since I've been having online           classes now, my car wasn't being used much. I shared my car on host so that I could earn some extra pocket           money from it. It easy to share the car on host and earn pocket money.</Text>
                            <Text color='grey'>
                                Prateek Singh, Age 22 <br />
                                College Student, Hyderabad
                            </Text>
                        </VStack>
                    </VStack>
                </HStack>

                <Stack direction={{ base: 'column', lg: 'row' }} w='full' mb='20'>
                    <Heading w={{ base:'90%',lg:'30%'}}>
                        Still have <br /> questions?
                    </Heading>
                    <Box w={{base:'99%',lg:'65%'}}>
                        <Accordion w='full'>
                            <AccordionItem p='3'>
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            Do I need to meet the renters of my car?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    We have installed the keyless entry devices in your car, which makes sure that you need not meet any of the renters in person, either at the start, or at the end of any booking.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem p='3'>
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            How will I get Paid?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Your total earnings will be credited to your bank account every week. You can access your detailed earnings through our Zoomcar Host app.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem p='3'>
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            What happens if my car gets challans or traffic fines while my car is being shared?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Zoomcar will take care of all challans incurred during car sharing.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem p='3'>
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            How much will I earn?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <p>You will earn 60% of the booking revenue that your car earns on every booking. Your earnings will be paid to you on a weekly basis. </p>
                                    <p>Use our quick <span>online calculator</span>  to see how much you can earn by sharing the car.</p>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                </Stack>

                <Box bg='#f5f5f5'>
                    <Box w='full' mt='14' mb='6'>
                        <Text pl='4' color='rgba(0, 0, 0, 0.16)' lineHeight='0.9' fontSize='50px' fontWeight='bold'>Never <br /> Stop <br /> Living.</Text>
                    </Box>
                    <Text w='full' textAlign='center' mb='7'>© Copyright 2022 Zoomcar India Private Ltd. All rights reserved</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default HostPage
