import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription, Box, CloseButton,
} from '@chakra-ui/react'

export default function AlertMessage({ showMessage, messageCloseToggle }) {
    // const {
    //     isOpen: isVisible,
    //     onClose,
    //     onOpen,
    // } = useDisclosure({ defaultIsOpen: true })


    if (showMessage)
        return <Alert position='fixed' zIndex='888' w='50%' left='25%' variant='solid' status='success'>
            <AlertIcon />
            <Box>
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                    Profile is successfully updated.
                </AlertDescription>
            </Box>
            <CloseButton
                alignSelf='flex-start'
                position='relative'
                right={-360}
                top={1}
                size='lg'
                onClick={() => { messageCloseToggle(false) }}
            />
        </Alert>

}