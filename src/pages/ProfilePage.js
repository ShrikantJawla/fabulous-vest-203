import React from 'react'
import { Box, FormControl, Input, VStack, Button, Grid, GridItem, Avatar, Text, Divider, HStack, Select, Stack } from '@chakra-ui/react';
import { AiFillCloseCircle } from 'react-icons/ai'
import { BiDollarCircle } from 'react-icons/bi'
import Navbar from './../components/Navbar';
import { updateItem, getSingleItem } from '../Configs/firebaseConfigs'
import { AuthContext } from '../Contexts/authContext/authContext';
import AlertMessage from '../components/AlertMessage';
const shadow = 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
let initialValue = {};

let user;
let id;
function ProfilePage() {
    const { authState, authDispatch } = React.useContext(AuthContext);
    const [currentUser, setCurrentUser] = React.useState(initialValue);
    const [profileUser, setProfileUser] = React.useState({});
    const [showMessage, setShowMessage] = React.useState(false);

    function messageCloseToggle(val) {
        setShowMessage(val);
    }

    React.useEffect(() => {
        user = JSON.parse(localStorage.getItem('loginedUser')) || null;
        id = user?.email;
        if (id) getSingleUser();
    }, []);

    async function getSingleUser() {
        try {
            const res = await getSingleItem(id);
            setProfileUser(res.data());
            setCurrentUser({ ...res.data() });
            localStorage.setItem('loginedUser', JSON.stringify(res.data()));
        }
        catch (err) {
            console.log(err)
        }
    }

    async function updateUserData(id, data) {
        updateItem(id, data);
        messageCloseToggle(true);
    }

    function handleUpdate() {
        updateUserData(id, currentUser);
        authDispatch({ type: 'UPDATESTATE', payload: currentUser });
    }
    // console.log(user)
    // console.log(currentUser)

    return (
        <Box w='full'>
            <Navbar />
            <AlertMessage showMessage={showMessage} messageCloseToggle={messageCloseToggle} />
            <Grid templateColumns={{ base: '100%', lg: '26% 68%' }} gap='3' justifyContent='center'>
                <GridItem py='8' shadow={shadow} px='4'>
                    <VStack mb='2'>
                        <Avatar size='xl' src={profileUser?.profilePhoto} />
                        <VStack spacing='-1px'>
                            <Text fontWeight='bold'>{profileUser?.name}</Text>
                            <Text fontSize='14px'>{profileUser?.mobile}</Text>
                            <Text fontSize='14px'>{profileUser?.email}</Text>
                        </VStack>
                    </VStack>
                    <Divider bg='black' />
                    <VStack mb='2' w='full' align='flex-start'>
                        <HStack>
                            <AiFillCloseCircle />
                            <Text>Profile Document</Text>
                        </HStack>
                        <HStack>
                            <AiFillCloseCircle />
                            <Text>Paytm Wallet</Text>
                        </HStack>
                        <HStack>
                            <AiFillCloseCircle />
                            <Text>Profile Document</Text>
                        </HStack>
                    </VStack>
                    <Divider bg='black' />
                    <HStack my='2' align='center' justify='space-between'>
                        <HStack spacing='1px'>
                            <BiDollarCircle size='27px' />
                            <Text>Z-Points</Text>
                        </HStack>
                        <Text color='orange'>Install App to use z-points</Text>
                    </HStack>
                    <Divider bg='black' />
                    <HStack my='2' align='center' justify='space-between'>
                        <HStack spacing='1px'>
                            <BiDollarCircle size='27px' />
                            <Text>Credits</Text>
                        </HStack>
                        <Text fontWeight='bold' color='green'>Rs 0</Text>
                    </HStack>
                    <Divider bg='black' />
                    <HStack my='2' align='center' justify='space-between'>
                        <HStack spacing='1px'>
                            <BiDollarCircle size='27px' />
                            <Text>Paytm Wallet</Text>
                        </HStack>
                        <Text fontWeight='bold' color='green'>Link Wallet</Text>
                    </HStack>
                    <Divider bg='black' />
                    <VStack align='flex-start' pl='14'>
                        <HStack py='2'><Text>My Booking</Text></HStack>
                        <HStack py='2'><Text>Saved Cards</Text></HStack>
                        <HStack py='2'><Text>Account</Text></HStack>
                        <HStack py='2'><Text>Profile Verification</Text></HStack>
                        <HStack py='2'><Text>Co-Driver</Text></HStack>
                    </VStack>
                </GridItem>


                <GridItem shadow={shadow} p={{ base: '0', md: '6' }} >
                    <Box pb='5' borderBottom='1px solid grey'>
                        <Text fontSize='22px' align='center' fontWeight='bold'>MY ACCOUNT</Text>
                    </Box>

                    <VStack align='flex-start' w='full' px='4' pb='4'>
                        <Box borderBottom='1px solid grey' w='full'>
                            <Text fontSize='18px' pt='5'>Account Details</Text>
                        </Box>
                        <HStack style={{ marginBottom: '8px' }}>
                            <Box fontSize='14px' w='100px' textAlign='left'><Text>Email</Text></Box>
                            <Box fontSize='14px' textAlign='left' w='200px'><Text>{profileUser?.email}</Text></Box>
                        </HStack>
                        <HStack >
                            <Box fontSize='14px' w='100px' textAlign='left'><Text>Mobile*</Text></Box>
                            <Box fontSize='14px' w={{ base: '150px', md: '200px' }}>
                                <FormControl >
                                    <Input outline='1px solid grey' onChange={(e) => { setCurrentUser({ ...currentUser, mobile: e.target.value }) }} value={currentUser?.mobile} size={{ base: 'sm', md: 'md' }} />
                                </FormControl>
                            </Box>
                        </HStack>
                    </VStack>

                    <VStack align='flex-start' w='full' px={{ base: '1', md: '4' }} pb='4'>
                        <Box borderBottom='1px solid grey' w='full'>
                            <Text fontSize='18px' pt='5'>Personal Details</Text>
                        </Box>
                        <Stack direction={{ base: 'column', md: 'row' }} justify='space-between' w='full'>
                            <HStack style={{ marginBottom: '8px' }}>
                                <Box fontSize='14px' w='100px' textAlign='left'><Text>Name*</Text></Box>
                                <Box fontSize='14px' textAlign='left' w='200px'><Text>{profileUser?.name}</Text></Box>
                            </HStack>
                            <HStack style={{ marginBottom: '8px' }}>
                                <Box fontSize='14px' w='100px' textAlign='left'><Text>Gender</Text></Box>
                                <Select onChange={(e) => { setCurrentUser({ ...currentUser, gender: e.target.value }) }} value={currentUser?.gender} placeholder='Select option'>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                </Select>
                            </HStack>
                        </Stack>
                    </VStack>

                    <VStack align='flex-start' w='full' px='4' pb='4'>
                        <Box borderBottom='1px solid grey' w='full'>
                            <Text fontSize='18px' pt='5'>Location Details</Text>
                        </Box>
                        <VStack align='flex-start' w='full'>
                            <Text mb='4' fontSize='15px'>Please share your current city for optimized experience</Text>
                            <HStack style={{ marginBottom: '8px' }}>
                                <Box fontSize='14px' w='100px' textAlign='left'><Text>City</Text></Box>
                                <Box fontSize='14px' textAlign='left' w={{ base: '150px', md: '200px' }} >
                                    <FormControl rounded='5px'>
                                        <Input outline='1px solid grey' onChange={(e) => { setCurrentUser({ ...currentUser, city: e.target.value }) }} value={currentUser?.city} size={{ base: 'sm', md: 'md' }} />
                                    </FormControl>
                                </Box>
                            </HStack>
                        </VStack>
                    </VStack>

                    <Box w='full' display='flex' justifyContent='Center'>
                        <Button onClick={handleUpdate} px='6' variant='outline' colorScheme='black'>UPDATE</Button>
                    </Box>

                </GridItem>
            </Grid>
        </Box>
    )
}

export default ProfilePage
