import { Container, Text,Box } from '@chakra-ui/react'
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';


function App() {
  return (
    <Box w='full'>
      <Navbar />
      <AllRoutes/>
    </Box>
  );
}

export default App;
