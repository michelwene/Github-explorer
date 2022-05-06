import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { MdExplore } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";

const Home: NextPage = () => {
  return (
    <VStack as="section" maxWidth="714px" spacing={28} align="flex-start">
      <Flex as="header" width="100%" gap={4} mt={10}>
        <MdExplore fontSize="32px" />
        <Text>
          <strong>github</strong>_explorer
        </Text>
      </Flex>
      <Flex flexDirection="column" gap={10}>
        <Heading as="h1" fontSize="3rem" fontWeight={700}>
          Explore repositórios no Github.
        </Heading>
        <Flex height="4.5rem">
          <Input
            bg="white"
            border="none"
            borderRightRadius="0"
            colorScheme="whiteAlpha"
            height="100%"
            placeholder="Digite aqui"
          />
          <Button
            height="100%"
            colorScheme="green"
            minWidth="210px"
            borderLeftRadius="0"
          >
            Pesquisar
          </Button>
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
            <Box>
              <Image
                src="/Me 1.svg"
                alt="Icone imagem usuário"
                borderRadius="50%"
                height="80px"
                width="80px"
              />
            </Box>
            <Flex flexDirection="column">
              <Heading as="h2" fontSize="1.5rem">
                tiagoluchtenberg/repo
              </Heading>
              <Text fontSize="1.2rem" color="gray.200">
                Descrição do repo
              </Text>
            </Flex>
          </Flex>
          <Box>
            <AiOutlineRight color="gray.100" />
          </Box>
        </Flex>
        <Flex
          align="center"
          bg="white"
          borderRadius="5px"
          justifyContent="space-between"
          p="1rem"
          width="100%"
        >
          <Flex gap="1.3rem" align="center">
            <Box>
              <Image
                src="/Me 1.svg"
                alt="Icone imagem usuário"
                borderRadius="50%"
                height="80px"
                width="80px"
              />
            </Box>
            <Flex flexDirection="column">
              <Heading as="h2" fontSize="1.5rem">
                tiagoluchtenberg/repo
              </Heading>
              <Text fontSize="1.2rem" color="gray.200">
                Descrição do repo
              </Text>
            </Flex>
          </Flex>
          <Box>
            <AiOutlineRight color="gray.100" />
          </Box>
        </Flex>
        <Flex
          align="center"
          bg="white"
          borderRadius="5px"
          justifyContent="space-between"
          p="1rem"
          width="100%"
        >
          <Flex gap="1.3rem" align="center">
            <Box>
              <Image
                src="/Me 1.svg"
                alt="Icone imagem usuário"
                borderRadius="50%"
                height="80px"
                width="80px"
              />
            </Box>
            <Flex flexDirection="column">
              <Heading as="h2" fontSize="1.5rem">
                tiagoluchtenberg/repo
              </Heading>
              <Text fontSize="1.2rem" color="gray.200">
                Descrição do repo
              </Text>
            </Flex>
          </Flex>
          <Box>
            <AiOutlineRight color="gray.100" />
          </Box>
        </Flex>
        <Flex
          align="center"
          bg="white"
          borderRadius="5px"
          justifyContent="space-between"
          p="1rem"
          width="100%"
        >
          <Flex gap="1.3rem" align="center">
            <Box>
              <Image
                src="/Me 1.svg"
                alt="Icone imagem usuário"
                borderRadius="50%"
                height="80px"
                width="80px"
              />
            </Box>
            <Flex flexDirection="column">
              <Heading as="h2" fontSize="1.5rem">
                tiagoluchtenberg/repo
              </Heading>
              <Text fontSize="1.2rem" color="gray.200">
                Descrição do repo
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
};

export default Home;
