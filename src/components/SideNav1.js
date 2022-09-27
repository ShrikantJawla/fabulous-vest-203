import { Box, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerOverlay, HStack, IconButton, Spacer, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { AiFillCar } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { MdCall } from 'react-icons/md';

const hoverStyle = { cursor: 'pointer', backgroundColor:'#E2E8F0' }

function SideNav1() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    return (
        <>
            <IconButton zIndex='9999' onClick={onOpen} _hover={{ bg: 'grey' }} variant='ghost' color={{ base: "black", lg: 'white' }} icon={<GiHamburgerMenu size='24px' />} />
            <Drawer isOpen={isOpen}
                placement='left'
                initialFocusRef={firstField}
                onClose={onClose}
                size='xs'
            >
                <DrawerOverlay />
                <DrawerContent>

                    <DrawerBody pl='2' pr='0'>
                        <Box display='flex' gap='3' p='3' _hover={hoverStyle} mb='1'>
                            <BsFillPersonFill size='20px' />
                            <Text>Login or Signup</Text>
                        </Box>
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
                    </DrawerBody>
                </DrawerContent>

            </Drawer>
        </>
    )
}

export default SideNav1
