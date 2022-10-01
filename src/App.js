import { Container, Text, Box } from '@chakra-ui/react'
import AllRoutes from './components/AllRoutes';
import LocationUpdater from './components/LocationUpdater';


function App() {
  return (
    <Box w='full'>
      <AllRoutes />
      {/* <LocationUpdater/> */}
    </Box>
  );
}

export default App;
