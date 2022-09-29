import React from 'react'
import { Box, FormControl, Input, VStack, Button, useRadio, Grid, GridItem, Avatar, Text, Divider, HStack, Center, Select } from '@chakra-ui/react';
import { db } from '../Configs/firebaseConfigs'
import { collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai'
import { BiDollarCircle } from 'react-icons/bi'
const shadow = 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
let initialValue = {};
function ProfilePage() {


    const [allUsers, setAllUsers] = React.useState([]);
    const [currentUser, setCurrentUser] = React.useState(initialValue);
    React.useEffect(() => {
        getDocs(collection(db, 'loginedUser'))
            .then(res => {
                let d = [];
                res.docs.forEach(doc => {
                    d.push({ ...doc.data(), id: doc.id })
                })
                setAllUsers(d);
                initialValue = {
                    ...d[0]
                }
            }).then(err => {
                console.log(err);
            })
    }, []);
    // console.log(initialValue);
    console.log(currentUser)

    function handleUpdate() {
        updateDoc(doc(db, 'loginedUser', allUsers[0].id), currentUser);
        updateDoc(doc(db, 'users', allUsers[0].id), currentUser);
    }


    return (
        <Box mt='100px' w='full'>
            <Grid templateColumns={{ base: '1fr', lg: '26% 68%' }} gap='3' justifyContent='center'>
                <GridItem py='8' shadow={shadow} px='4'>
                    <VStack mb='2'>
                        <Avatar size='xl' src={allUsers[0]?.profilePhoto} />
                        <VStack spacing='-1px'>
                            <Text fontWeight='bold'>{allUsers[0]?.name}</Text>
                            <Text fontSize='14px'>{allUsers[0]?.mobile}</Text>
                            <Text fontSize='14px'>{allUsers[0]?.email}</Text>
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


                <GridItem shadow={shadow} p='6'>
                    <Box pb='5' borderBottom='1px solid grey'>
                        <Text fontSize='22px' align='center' fontWeight='bold'>MY ACCOUNT</Text>
                    </Box>

                    <VStack align='flex-start' w='full' px='4' pb='4'>
                        <Box borderBottom='1px solid grey' w='full'>
                            <Text fontSize='18px' pt='5'>Account Details</Text>
                        </Box>
                        <HStack style={{ marginBottom: '8px' }}>
                            <Box fontSize='14px' w='100px' textAlign='left'><Text>Email</Text></Box>
                            <Box fontSize='14px' textAlign='left' w='200px'><Text>anmolchaudhary@gmail.com</Text></Box>
                        </HStack>
                        <HStack >
                            <Box fontSize='14px' w='100px' textAlign='left'><Text>Mobile*</Text></Box>
                            <Box fontSize='14px' w='200px'>
                                {allUsers[0]?.mobile ? <Box fontSize='14px' w='200px' textAlign='left'><Text>{allUsers[0]?.mobile}</Text></Box> : <FormControl border='1px solid grey'>
                                    <Input onChange={(e) => { setCurrentUser({ ...currentUser, mobile: e.target.value }) }} value={currentUser?.mobile} size='md' />
                                </FormControl>}
                            </Box>
                        </HStack>
                    </VStack>

                    <VStack align='flex-start' w='full' px='4' pb='4'>
                        <Box borderBottom='1px solid grey' w='full'>
                            <Text fontSize='18px' pt='5'>Personal Details</Text>
                        </Box>
                        <HStack justify='space-between' w='full'>
                            <HStack style={{ marginBottom: '8px' }}>
                                <Box fontSize='14px' w='100px' textAlign='left'><Text>Name*</Text></Box>
                                <Box fontSize='14px' textAlign='left' w='200px'><Text>Shrikant</Text></Box>
                            </HStack>
                            <HStack style={{ marginBottom: '8px' }}>
                                <Box fontSize='14px' w='100px' textAlign='left'><Text>Gender</Text></Box>
                                <Box fontSize='14px' textAlign='left' w='200px'><Text>Male</Text></Box>
                            </HStack>
                        </HStack>
                    </VStack>

                    <VStack align='flex-start' w='full' px='4' pb='4'>
                        <Box borderBottom='1px solid grey' w='full'>
                            <Text fontSize='18px' pt='5'>Location Details</Text>
                        </Box>
                        <VStack align='flex-start' w='full'>
                            <Text mb='4' fontSize='15px'>Please share your current city for optimized experience</Text>
                            <HStack style={{ marginBottom: '8px' }}>
                                <Box fontSize='14px' w='100px' textAlign='left'><Text>City</Text></Box>
                                <Box fontSize='14px' textAlign='left' w='200px' >
                                    {allUsers[0]?.city ? <Box fontSize='14px' w='200px' textAlign='left'><Text>{allUsers[0]?.city}</Text></Box> : <FormControl border='1px solid grey' rounded='5px'>
                                        <Input onChange={(e) => { setCurrentUser({ ...currentUser, city: e.target.value }) }} value={currentUser?.address} size='md' />
                                    </FormControl>}
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
