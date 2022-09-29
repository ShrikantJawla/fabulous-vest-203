import {
    Avatar, Box, Drawer, DrawerBody, DrawerContent,
    DrawerOverlay, HStack, IconButton, Spacer, Text, useDisclosure, VStack
} from '@chakra-ui/react'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { AiFillCar } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { MdCall } from 'react-icons/md';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { IoHome } from 'react-icons/io5';
import { AuthContext } from '../Contexts/authContext/authContext';
import { Link } from 'react-router-dom';
import { collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from '../Configs/firebaseConfigs'; 

const hoverStyle = { cursor: 'pointer', backgroundColor: '#E2E8F0' }

function SideNav1() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    const { authState, authDispatch } = React.useContext(AuthContext);
    const [currentUserId, setCurrentUserId] = React.useState('');
    const [currentUser, setCurrentUser] = React.useState({});

    React.useEffect(() => {
        getDocs(collection(db, 'loginedUser'))
            .then(res => {
                let d = [];
                res.docs.forEach(doc => {
                    d.push({ ...doc.data(), id: doc.id })
                })
                setCurrentUser(d[0]);
                setCurrentUserId(d[0].id);
            }).then(err => {
                console.log(err);
            })
    }, []);

    function toggleLinkOfProfile() {
        if (authState.isAuth) return '/profile';
        return '/login';
    }

    function displayLoginDetails() {
        let profileIcon;
        if (authState.isAuth) {
            profileIcon = <Link to={toggleLinkOfProfile()}><Box onClick={onClose} ml='-8px' display='flex' gap='3' p='3' _hover={{ cursor: 'pointer', bg: 'rgba(0, 0, 0, 0.80)' }} mb='1' bg='black'>
                <Avatar size='lg' src={authState.userDetails.profilePhoto} />
                <Box textAlign='left' display='flex' flexDir='column' justifyContent='center' alignItems='flex-start'>
                    {authState.userDetails.name && <Text w='full' fontWeight='bold' fontSize='19px' color='white'>{authState.userDetails.name}</Text>}
                    {authState.userDetails.email && <Text w='full' fontSize='14px' letterSpacing='0.5px' color='grey'>{authState.userDetails.email}</Text>}
                    {authState.userDetails.mobile && <Text w='full' fontSize='14px' letterSpacing='0.5px' color='grey'>{authState.userDetails.mobile}</Text>}
                </Box>
            </Box></Link>
        } else {
            profileIcon = <Link to={toggleLinkOfProfile()}><Box onClick={onClose} display='flex' gap='3' p='3' _hover={hoverStyle} mb='1'>
                <BsFillPersonFill size='20px' />
                <Text>Login or Signup</Text>
            </Box></Link>
        }
        return profileIcon;
    }


    function handleLogout() {
        authDispatch({ type: 'LOGOUT' });
        onClose();
        //deleting the current user from firestore
        deleteDoc(doc(db, 'loginedUser', currentUserId));
    }


    return (
        <>
            <IconButton zIndex='9999' onClick={onOpen} _hover={{ bg: 'grey' }} variant='ghost' color={{ base: "black", lg: 'white' }} icon={<GiHamburgerMenu size='24px' />} />
            <Drawer isOpen={isOpen}
                placement='left'
                initialFocusRef={firstField}
                onClose={onClose}
                size={{ base: 'xs', md: 'sm' }}
            >
                <DrawerOverlay />
                <DrawerContent>

                    <DrawerBody pl='2' pr='0' pt='0'>
                        {displayLoginDetails()}
                        <Link to='/'><Box onClick={onClose} display={{ base: 'flex', lg: 'none' }} gap='3' p='3' mb='1'>
                            <IoHome size='20px' />
                            <Text>Home</Text>
                        </Box></Link>
                        <HStack p='3' _hover={hoverStyle} mb='1'>
                            <HStack gap='1'>
                                <GoLocation size='20px' />
                                <Text>Change City</Text>
                            </HStack>
                            <Spacer />
                            <Text fontWeight='bold' color='green' fontSize='16px'>Delhi NCR</Text>
                        </HStack>
                        <Box display='flex' gap='3' p='3' mb='1'>
                            <AiFillCar size='20px' />
                            <Text>Become a Host</Text>
                        </Box>
                        <Box display='flex' gap='3' p='3' _hover={hoverStyle} mb='1'>
                            <CgFileDocument size='20px' />
                            <Text>Zoomcar Fleet Vehicles Policie</Text>
                        </Box>
                        <Box display='flex' gap='3' p='3' _hover={hoverStyle} mb='1'>
                            <CgFileDocument size='20px' />
                            <Text>Zoomcar Host Vehicles Policies</Text>
                        </Box>
                        <Box display='flex' gap='3' p='3' _hover={hoverStyle} mb='1'>
                            <MdCall size='20px' />
                            <Text>Help & Support</Text>
                        </Box>
                        {authState.isAuth && <Link to='/'><Box onClick={handleLogout} display='flex' gap='3' p='3' _hover={hoverStyle} mb='1' color='red' fontWeight='bold'>
                            <RiLogoutCircleRLine size='20px' />
                            <Text>Log out</Text>
                        </Box></Link>}
                    </DrawerBody>
                </DrawerContent>

            </Drawer>
        </>
    )
}

export default SideNav1
