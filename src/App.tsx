import React from 'react';
import Sidebar from './components/app/Sidebar';
import Box from './components/layout/Box';

const App: React.FC = () => {
  return (
    <Box flex={1} vertical height="100%" width="100%">
        <Box backgroundColor="red" height={50}></Box>
        <Box flex={1} horizontal>
          <Box width={300}backgroundColor="blue">
            <Sidebar />
          </Box>
          <Box flex={1} backgroundColor="green"></Box>
        </Box>
    </Box>
  );
}

export default App;
