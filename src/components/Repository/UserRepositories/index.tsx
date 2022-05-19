import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { AiOutlineRight } from "react-icons/ai";

interface IPropsRepository {
  name?: string;
  full_name?: string;
  onClick?: () => void;
}

export function UserRepositories({
  name,
  full_name,
  onClick,
}: IPropsRepository) {
  return (
    <>
      <VStack spacing={4} width="100%">
        <Flex
          align="center"
          bg="white"
          borderRadius="5px"
          justifyContent="space-between"
          p="1rem"
          width="100%"
        >
          <Flex align="center">
            <Flex flexDirection="column">
              <Heading as="h2" fontSize="1.5rem">
                {name}
              </Heading>
              <Text fontSize="1.2rem" color="gray.200">
                {full_name}
              </Text>
            </Flex>
          </Flex>
          <Box onClick={onClick} cursor="pointer" as="a" target="_blank">
            <AiOutlineRight color="gray.100" />
          </Box>
        </Flex>
      </VStack>
    </>
  );
}
