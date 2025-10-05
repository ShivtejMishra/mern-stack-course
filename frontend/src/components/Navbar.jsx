import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiPlusSquare } from "react-icons/fi";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode(); // fixed destructuring

  return (
    <Container maxW="1140px" px={4} bg={useColorModeValue("gray.100","gray.900")}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: "column", sm: "row" }}
        gap={{ base: 2, sm: 0 }} // spacing when stacked
        py={2}
      >
        <Link to="/">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={{ base: "22px", sm: "28px" }} // added px
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
        >
          Product Store
        </Text>
        </Link>

        <HStack spacing={2} alignItems="center" mt={{ base: 2, sm: 0 }}>
          <Link to="/create">
            <Button leftIcon={<FiPlusSquare />}>Create</Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "☀️" : "🌑"}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
