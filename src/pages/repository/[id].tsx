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
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Logo } from "../../components/Logo";
import { RepositoryInfo } from "../../components/Repository/RepositoryInfo";
import { api } from "../../services/api";
import { IRepositoryData } from "../../types/repository";

interface IPropsRepository {
  full_name: string;
  description: string;
  forks: number;
  watchers: number;
  open_issues: number;
  owner: {
    avatar_url: string;
    login: string;
  };
}

export default function Repositorie() {
  const [repository, setRepository] = useState<IPropsRepository>();
  const { query } = useRouter();

  useEffect(() => {
    (async () => {
      const response = await api.get(`/repositories/${query.id}`);
      setRepository(response.data);
    })();
  }, []);

  console.log(repository);
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
        imageUrl={repository?.owner.avatar_url}
        name={repository?.full_name}
        description={repository?.description}
        stars={repository?.watchers}
        forks={repository?.forks}
        issues={repository?.open_issues}
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
