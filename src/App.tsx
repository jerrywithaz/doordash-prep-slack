import React from "react";
import Content from "./components/app/Content";
import Sidebar from "./components/app/Sidebar";
import Box from "./components/layout/Box";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box flex={1} vertical height="100%" width="100%">
          <Box backgroundColor="red" height={50}></Box>
          <Box flex={1} horizontal>
            <Box width={300} backgroundColor="blue">
              <Sidebar />
            </Box>
            <Box flex={1} backgroundColor="green">
              <Content />
            </Box>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
