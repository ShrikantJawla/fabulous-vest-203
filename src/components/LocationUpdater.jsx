import React from 'react'
import { FormControl, Input, FormLabel, Button, Text } from '@chakra-ui/react'
import { AuthContext } from '../Contexts/authContext/authContext'
import { Link } from 'react-router-dom'
import { MotionVStack } from './AnimationsVariants'
import { AnimatePresence } from 'framer-motion'
const shadow =
  'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'

function LocationUpdater() {
  const [location, setLocation] = React.useState({ country: '', city: '' })
  const { authDispatch } = React.useContext(AuthContext)

  function handlesubmit() {
    if (location.country === '' || location.city === '') {
      alert('Please fill all the details')
      return
    }
    authDispatch({ type: 'LOCATIONUPDATER', payload: location })
  }

  return (
    <AnimatePresence>
      <MotionVStack
        key="locationUpdateradfasdfasdfasdf"
        variants={LocationUpdatervariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        zIndex="8989989"
        bg="white"
        rounded={5}
        spacing={5}
        boxShadow={shadow}
        position="fixed"
        top={{ base: '5%', lg: '10%' }}
        left={{ base: '4%', md: '25%', lg: '38%' }}
        px="7"
        py="9"
        w={{ base: '90vw', md: '360px' }}
        h="fit-content"
      >
        <FormControl>
          <FormLabel>Enter your Country</FormLabel>
          <Input
            value={location.country}
            onChange={(e) => {
              setLocation({ ...location, country: e.target.value })
            }}
            placeholder="Country"
            boxShadow="md"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Enter your City</FormLabel>
          <Input
            value={location.city}
            onChange={(e) => {
              setLocation({ ...location, city: e.target.value })
            }}
            placeholder="City"
            boxShadow="md"
          />
        </FormControl>
        <Button
          onClick={handlesubmit}
          variant="solid"
          w="full"
          colorScheme="linkedin"
        >
          Update Location
        </Button>
        <Text>
          Already signed up?{' '}
          <Link to="/login">
            <Text
              display="inline"
              fontSize={19}
              fontWeight={400}
              _hover={{ textDecoration: 'underline' }}
            >
              click here
            </Text>
          </Link>
        </Text>
      </MotionVStack>
    </AnimatePresence>
  )
}

export default LocationUpdater

const LocationUpdatervariant = {
  hidden: {
    opacity: 0.3,
    x: '-200',
    scale: 0.2,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: 0.7,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0.3,
    x: '-200vw',
    scale: 0.2,
    transition: {
      delay: 0.4,
      duration: 0.5,
    },
  },
}
