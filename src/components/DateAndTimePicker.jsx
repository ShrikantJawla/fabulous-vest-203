import { HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { useAppContext } from '../Contexts/AppContext/AppContext'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

export default function DateAndTimePicker() {
  const { appState, appDispatch } = useAppContext()
  //   console.log(appState)
  //   console.log(value.slice(0,4))
  // console.log(value.slice(5,7))
  // console.log(value.slice(8,10))
  // console.log(value.slice(11,13))
  // console.log(value.slice(14,16))

  function handleChange(e) {
    let val = e.target.value
    appDispatch({
      type: 'ADD_PICK_DROP_TIME',
      payload: {
        [e.target.name]: {
          date: val.slice(8, 10),
          month: val.slice(5, 7),
          year: val.slice(0, 4),
          time: {
            hours: val.slice(11, 13),
            mins: val.slice(14, 16),
          },
        },
      },
    })
  }

  return (
    <HStack mb="1" bg="white">
      <VStack w="45%">
        <Input
          name="picktime"
          type="datetime-local"
          bg="white"
          onChange={handleChange}
        />
      </VStack>
      <HiOutlineArrowNarrowRight color="grey" fontSize={50} />
      <VStack w="45%">
        <Input
          name="droptime"
          type="datetime-local"
          bg="white"
          onChange={handleChange}
        />
      </VStack>
    </HStack>
  )
}
