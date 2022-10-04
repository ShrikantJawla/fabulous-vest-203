import { useScroll } from 'framer-motion'
import React from 'react'
import { Box } from '@chakra-ui/react'
import { MotionBox } from './AnimationsVariants'

function PageScrollBar() {
  const { scrollYProgress } = useScroll()
  return (
    <MotionBox
      rounded="20"
      h="14px"
      bg="red"
      position="fixed"
      top="80.3px"
      zIndex={222222222}
      left="0"
      right="0"
      style={{ scaleX: scrollYProgress }}
    ></MotionBox>
  )
}

export default PageScrollBar
