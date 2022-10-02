import { Box } from '@chakra-ui/react'
import AllRoutes from './components/AllRoutes';
import GoogleMap from './components/GoogleMap';
import NewLoginPage from './pages/NewLoginPage';


function App() {
  return (
    <Box w='full'>
      <AllRoutes />
      {/* <NewLoginPage/> */}
    </Box>
  );
}

export default App;

