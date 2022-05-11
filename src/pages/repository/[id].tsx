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
import { UserRepositories } from "../../components/Repository/UserRepositories";
import { api } from "../../services/api";

interface IPropsRepository {
  id: number;
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
  const [repositories, setRepositories] = useState<IPropsRepository[]>([]);
  const { query } = useRouter();

  useEffect(() => {
    (async () => {
      const response = await api.get(`/repositories/${query.id}`);

      setRepository(response.data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let ownerLogin = repository?.owner.login;

  useEffect(() => {
    (async () => {
      const response = await api.get(`/users/${ownerLogin}/repos`, {
        params: {
          per_page: 5,
        },
      });

      setRepositories(response.data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repository]);

  return (
    <VStack
      as="section"
      maxWidth="714px"
      spacing="1rem"
      width="960px"
      align="flex-start"
      pb={4}
    >
      <Flex
        as="header"
        width="100%"
        gap={4}
        mt={10}
        pb="6rem"
        align="center"
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
      {repositories?.map((repo) => (
        <>
          <UserRepositories
            key={repo.id}
            name={repo.full_name}
            full_name={repo.owner.login}
          />
        </>
      ))}
    </VStack>
  );
}
