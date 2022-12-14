import { motion } from "framer-motion"
import { Box, Button, Center, Text, VStack } from '@chakra-ui/react'

export const BoxExitVariant = {
    initial: {
        x: '-100vw',
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.1, duration: 0.5 },
    },
    exit: {
        x: '110vw',
        opacity: 0.2,
        // display:'none',
        transition: {
            delay: 0.1,
            duration: 0.5,
        },
    },
}




// Components

const MotionBox = motion(Box)
const MotionButton = motion(Button)
const MotionText = motion(Text)
const MotionCenter = motion(Center)
const MotionVStack = motion(VStack)



export { MotionButton, MotionBox, MotionText, MotionCenter, MotionVStack }