import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import LoginViaSocialMedias from './login/LoginViaSocialMedias'
import PhoneLogin from './login/PhoneLogin'
import SignUpAndLoginPage from './login/SignUpAndLoginPage'

const shadow =
  'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'

function NewLoginPage() {
  return (
    <Box
      w={{ base: '100%', md: '90%', lg: '80%' }}
      m="auto"
      boxShadow={shadow}
      rounded="7"
      p="10px"
      mt={{base:"10px",lg:'30px'}}
      position="relative"
      bg="white"
    >
      <Text
        mb={4}
        textAlign="center"
        fontSize={25}
        fontWeight="bold"
        color="grey"
      >
        Choose a Login Method
      </Text>
      <Stack
        flexDirection={{ base: 'column', md: 'row' }}
        w={{ base: '99%', lg: '90%' }}
        p="15px"
        m="auto"
        mb={{ base: '15px', lg: '14px' }}
        h={{ base: 'fit-content', md: '270px' }}
        position="relative"
        justify="space-between"
        alignItems="center"
      >
        <Box w={{ base: '100%', md: '50%', lg: '43%' }} p="3">
          <SignUpAndLoginPage />
        </Box>
        <Box
          display={{ base: 'none', md: 'block' }}
          w=".5px"
          h="270px"
          bg="lightgray"
          position="absolute"
          top={0}
          left={{ base: '52%', lg: '50%' }}
          zIndex="1"
          right={0}
        ></Box>
        <Box
          display={{ base: 'none', lg: 'flex' }}
          border="1px solid lightgrey"
          rounded="full"
          w="40px"
          h="40px"
          padding={1.5}
          bg="white"
          fontWeight="500"
          color="gray"
          zIndex={2}
        >
          OR
        </Box>
        <Box display="flex" w={{ base: '100%', md: '50%', lg: '43%' }}>
          <LoginViaSocialMedias />
        </Box>
      </Stack>
      <Box
        display={{ base: 'none', lg: 'block' }}
        w="100%"
        h="0.5px"
        bg="lightgray"
        position="absolute"
        left={0}
        top={'71%'}
        zIndex="1"
      ></Box>

      <Box
        m="auto"
        ml={{base:'auto',md:"49%",lg:'auto'}}
        border="1px solid lightgrey"
        rounded="full"
        w="40px"
        h="40px"
        display={{base:"flex",lg:'none'}}
        justifyContent="center"
        alignItems="center"
        bg="white"
        fontWeight="500"
        color="gray"
        zIndex={2}
      >
        OR
      </Box>
      <Box p="10px" w={{ base: '100%', lg: '46%' }} m="auto">
        <PhoneLogin />
      </Box>
    </Box>
  )
}

export default NewLoginPage
