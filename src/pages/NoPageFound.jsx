import React from 'react'
import { Box, Button, Container, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BoxExitVariant, MotionBox, MotionButton, MotionText } from '../components/AnimationsVariants'




const textVariant = {
  hidden: {
    textShadow: 'none',
    // x: '110vh',
  },
  visible: {
    // textShadow:
    //   '0 2px 2px #dfdfdf, -2px 5px 1px #b8b8b8, -4px 8px 0px #979797, -6px 11px 0px #747474,-8px 14px 0px #565656,-10px 17px 0px #343434,-12px 20px 0px #171717,-14px 23px 0px #000',
    y: [0, -30],
    transition: {
      duration: '1',
      ease: 'easeInOut',
      yoyo: Infinity,
      type: 'spring',
      stiffness: 50,
    },
  },
}
const buttonVariant = {
  hidden: {},
  visible: {
    scale: [1, 1.2, 1],
    textShadow: '0px,0px,8px,rgb(255,255,255)',
    boxShadow: '0px,0px,8px,rgb(255,255,255)',
    transition: {
      scale: {
        delay: 1,
        yoyo: Infinity,
        duration: 0.4,
        ease: 'easeInOut',
      },
      color: {
        delay: 1,
        yoyo: Infinity,
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  },
}

function NoPageFound() {
  return (
    <MotionBox
      w="full"
      initial="initial"
      variants={BoxExitVariant}
      animate="animate"
      exit="exit"
    >
      <Box
        overflow="hidden"
        backgroundImage={`url(/images/jan-kopriva-IeRgPDoPpzU-unsplash.jpg)`}
        backgroundPosition="center"
        backgroundSize="cover"
        h="100vh"
        filter="blur(4px)"
      ></Box>
      <VStack
        spacing={9}
        position="absolute"
        top="21%"
        left="32%"
        border="15px solid darkgrey"
        rounded="30"
        justify="center"
        w="500px"
        h="350px"
      >
        <MotionText
          fontSize={55}
          fontWeight="bold"
          color="white"
          textAlign="center"
          backgroundOpacity="0.5"
          variants={textVariant}
          whileHover="hover"
          initial="hidden"
          animate="visible"
        >
          404! <br /> Page Not Found
        </MotionText>
        <Link to="/">
          <MotionButton
            variants={buttonVariant}
            initial="hidden"
            animate="visible"
            border="2px solid"
            colorScheme="outlined"
            w="400px"
            fontSize="20"
            fontWeight="bold"
            color="white"
          >
            Go to Home Page
          </MotionButton>
        </Link>
      </VStack>
    </MotionBox>
  )
}

export default NoPageFound
