import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { AxiosError } from "axios";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Logo } from "../../components/Logo";
import { Error } from "../../components/PageError";
import { RepositoryInfo } from "../../components/Repository/RepositoryInfo";
import { RepositorySkeleton } from "../../components/Repository/RepositoryItem/skeleton";
import { UserRepositories } from "../../components/Repository/UserRepositories";
import { api } from "../../services/api";

interface RepositoryProps {
  id: number;
  full_name: string;
  description: string;
  forks: number;
  watchers: number;
  open_issues: number;
  html_url: string;
  owner: {
    avatar_url: string;
    login: string;
  };
}

export default function Repositorie() {
  const [repository, setRepository] = useState<RepositoryProps>();
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
  const [loading, setLoading] = useState(false);
  const { query } = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(`/repositories/${query.id}`);

        setRepository(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [query.id]);

  let ownerLogin = repository?.owner.login;

  useEffect(() => {
    try {
      setLoading(true);
      (async () => {
        const response = await api.get(`/users/${ownerLogin}/repos`, {
          params: {
            per_page: 5,
          },
        });

        setRepositories(response.data);
      })();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repository]);

  console.log(repository);

  return (
    <VStack
      as="section"
      maxWidth="714px"
      spacing="1rem"
      width={["100vw", "960px"]}
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
        justifyContent={["space-around", "space-between"]}
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
      <>
        <RepositoryInfo
          imageUrl={repository?.owner.avatar_url}
          name={repository?.full_name}
          description={repository?.description}
          stars={repository?.watchers}
          forks={repository?.forks}
          issues={repository?.open_issues}
        />
        {loading
          ? Array(5)
              .fill(0)
              .map((_, index) => <RepositorySkeleton key={index} />)
          : repositories?.map((repo) => (
              <>
                <UserRepositories
                  key={repo.id}
                  name={repo.full_name}
                  full_name={repo.owner.login}
                  onClick={() => {
                    Router.push(`${repo.html_url}`);
                  }}
                />
              </>
            ))}
      </>
    </VStack>
  );
}
