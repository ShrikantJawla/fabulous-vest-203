import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription, Box, CloseButton, HStack,
} from '@chakra-ui/react'

export default function AlertMessage({ showMessage, messageCloseToggle }) {
    // const {
    //     isOpen: isVisible,
    //     onClose,
    //     onOpen,
    // } = useDisclosure({ defaultIsOpen: true })


    if (showMessage)
        return <Alert justifyContent='space-between' position='fixed' zIndex='888' w={{ base: '99%', md: '50%' }} left={{ base: '0%', md: '25%' }} variant='solid' status='success'>
            <HStack>
                <AlertIcon />
                <Box>
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>
                        Profile is successfully updated.
                    </AlertDescription>
                </Box>
            </HStack>
            <CloseButton
                alignSelf='center'
                position='relative'
                right={{ base: 'auto', lg: -1 }}
                top={0.5}
                size='lg'
                onClick={() => { messageCloseToggle(false) }}
            />
        </Alert>

}