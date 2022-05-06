import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { AiOutlineRight } from "react-icons/ai";
import { MdExplore } from "react-icons/md";

export default function Repositorie() {
  return (
    <VStack
      as="section"
      maxWidth="714px"
      spacing="6rem"
      width="960px"
      align="flex-start"
    >
      <Flex as="header" width="100%" gap={4} mt={10}>
        <MdExplore fontSize="32px" />
        <Text>
          <strong>github</strong>_explorer
        </Text>
      </Flex>
      <Flex flexDirection="column" gap="2.5rem">
        <Flex gap="2rem">
          <Box>
            <Image
              src="/Me 1.svg"
              alt="foto de perfil do github"
              borderRadius="50%"
            />
          </Box>
          <Flex flexDirection="column">
            <Heading as="h2">tiagoluchtenberg/repo</Heading>
            <Text>Descrição do repo</Text>
          </Flex>
        </Flex>
        <Flex gap="5rem">
          <Box>
            <Text fontSize="2.25rem" fontWeight={700}>
              1808
            </Text>
            <Text fontSize="1.25rem" color="gray.300">
              Stars
            </Text>
          </Box>
          <Box>
            <Text fontSize="2.25rem" fontWeight={700}>
              48
            </Text>
            <Text fontSize="1.25rem" color="gray.300">
              Forks
            </Text>
          </Box>
          <Box>
            <Text fontSize="2.25rem" fontWeight={700}>
              67
            </Text>
            <Text fontSize="1.25rem" color="gray.300">
              Issues abertas
            </Text>
          </Box>
        </Flex>
      </Flex>

      <VStack spacing={4} width="100%" pb="1rem">
        <Flex
          align="center"
          bg="white"
          borderRadius="5px"
          justifyContent="space-between"
          p="1rem"
          width="100%"
        >
          <Flex gap="1.3rem" align="center">
            <Flex flexDirection="column">
              <Heading as="h2" fontSize="1.5rem">
                gostack-desafio-conceitos-react-native
              </Heading>
              <Text fontSize="1.2rem" color="gray.200">
                Diego Fernandes
              </Text>
            </Flex>
          </Flex>
          <Box>
            <AiOutlineRight color="gray.100" />
          </Box>
        </Flex>
      </VStack>
    </VStack>
  );
}
