import { Button, FormControl, HStack, Input } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
// import { AuthContext } from '../Contexts/authContext/authContext'
import { useAppContext } from '../Contexts/AppContext/AppContext'
import { useNavigate } from 'react-router-dom'

export default function GoogleMap() {
  const { appState, appDispatch } = useAppContext()
  const navigate = useNavigate()

  function handleSubmit() {
    
    navigate('/')
  }

  return (
    <Wrapper>
      <HStack
        pt="38"
        w={{ base: '90%', md: '60%' }}
        m="auto"
        justifyContent="center"
        spacing={4}
      >
        <FormControl w={{ base: '60%', lg: '450px' }}>
          <Input
            value={appState.location}
            onChange={(e) => {
              appDispatch({ type: 'ADD_LOCATION', payload: e.target.value })
            }}
            outline="1px solid #718096"
          />
        </FormControl>
        <Button onClick={handleSubmit} variant="outline" colorScheme="pink">
          Confirm
        </Button>
      </HStack>
      <Iframe
        title="Map"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src={`https://maps.google.com/maps?width=690&amp&height=510&amp&hl=en&amp&q=${appState.location}&amp&t=&amp&z=14&amp&ie=UTF8&amp&iwloc=B&amp&output=embed`}
      ></Iframe>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

const Iframe = styled.iframe`
  width: 70%;
  margin: auto;
  margin-top: 10px;
  height: 500px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media all and (max-width: 480px) {
    width: 99%;
    margin: auto;
    margin-top: 10px;
  }
  
`
