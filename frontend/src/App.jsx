import { Box, Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  
  return (
    <Box minH="100vh" >
      {/* Sticky Navbar */}
      <Box position="sticky" top="0" zIndex="1000"  shadow="sm">
        <Navbar />
      </Box>

      {/* Main Content */}
      <Container maxW="1140px" py={6}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
