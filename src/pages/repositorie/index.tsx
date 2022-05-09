import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { Logo } from "../../components/Logo";
import { RepositoryInfo } from "../../components/Repository/RepositoryInfo";

export default function Repositorie() {
  return (
    <VStack
      as="section"
      maxWidth="714px"
      spacing="6rem"
      width="960px"
      align="flex-start"
    >
      <Flex
        as="header"
        width="100%"
        gap={4}
        mt={10}
        justifyContent="space-between"
      >
        <Logo />
        <Flex>
          <Link href="/" passHref>
            <Button
              bg="inherit"
              color="gray.100"
              fontWeight={700}
              leftIcon={<AiOutlineLeft fontSize="1rem" color="gray.100" />}
              variant="link"
            >
              Voltar
            </Button>
          </Link>
        </Flex>
      </Flex>
      <RepositoryInfo
        imageUrl="Me1.svg"
        name="tiagoluchtenberg/repo"
        description="Descrição do repo"
        stars={1080}
        forks={20}
        issues={67}
      />

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
