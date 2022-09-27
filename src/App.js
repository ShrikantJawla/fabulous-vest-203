import { Container, Text } from '@chakra-ui/react'
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';


function App() {
  return (
    <Container maxW='full'>
      <Navbar />
      <AllRoutes/>
    </Container>
  );
}

export default App;
