import { Box, Flex, Heading } from "@chakra-ui/react";

interface ErrorProps {
  message: string;
  error: string;
}

export function Error({ message, error }: ErrorProps) {
  return (
    <Flex flexDirection="column" align="center">
      <Box fontWeight={900} fontSize={["40", "80", "100"]}>
        Error {error} 🙁
      </Box>
      <Box>
        <Heading
          as="h1"
          fontSize={["2rem", "3rem"]}
          fontWeight={700}
          textAlign="center"
        >
          Oops!
        </Heading>
        <Heading
          as="h2"
          color="red"
          fontSize={["1rem", "2rem"]}
          fontWeight={700}
          textAlign="center"
        >
          {message}
        </Heading>
      </Box>
    </Flex>
  );
}
