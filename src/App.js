import "./App.css";
import { Box, Flex } from "@chakra-ui/react";
import ListContainer from "./components/ListContainer";

function App() {
  return (
    <Box className="App">
      <Flex justify="center" align="center" h="100vh">
        <ListContainer />
      </Flex>
    </Box>
  );
}

export default App;
