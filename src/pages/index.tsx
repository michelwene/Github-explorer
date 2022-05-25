import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "../components/Logo";
import { RepositoryItem } from "../components/Repository/RepositoryItem";
import { Input } from "../components/Form/input";
import { api } from "../services/api";
import { useEffect, useState } from "react";
import { IRepositoryData } from "../types/repository";
import Router from "next/router";
import { RepositorySkeleton } from "../components/Repository/RepositoryItem/skeleton";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";

export interface IProps {
  repositories: IRepositoryData[];
  totalCount: number;
}

export default function Home({
  repositories: initialData,
  totalCount: initialTotalCount,
}: IProps) {
  const [loading, setLoading] = useState(false);
  const [repositorie, setRepositorie] =
    useState<IRepositoryData[]>(initialData);
  const [firstRender, setFirstRender] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(initialTotalCount);
  const [search, setSearch] = useState("");
  const [errorSearchRepositorie, setErrorSearchRepositorie] = useState(false);

  async function handleSubmitInput() {
    setLoading(true);
    try {
      const { data } = await api.get(`/search/repositories?q=${search}`, {
        params: {
          page: page,
          per_page: 5,
        },
      });
      if (data.items.length === 0) {
        setErrorSearchRepositorie(true);
        return;
      }
      data.total_count = Math.round(data.total_count / 5);

      setRepositorie(data.items);
      setTotalPages(data.total_count);
      setFirstRender(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleSubmitInput();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <VStack
      as="section"
      maxWidth="714px"
      spacing={28}
      align="flex-start"
      pt={4}
    >
      <Logo />
      <Flex flexDirection="column" gap={10}>
        <Heading as="h1" fontSize="3rem" fontWeight={700}>
          Explore repositórios no Github.
        </Heading>
        <Flex height="4.5rem">
          <Input
            name="search"
            bg="white"
            border="none"
            borderRightRadius="0"
            colorScheme="whiteAlpha"
            height="100%"
            placeholder="Digite aqui"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <Button
            type="submit"
            height="100%"
            colorScheme="green"
            minWidth="210px"
            borderLeftRadius="0"
            loadingText="Pesquisando..."
            onClick={() => handleSubmitInput()}
          >
            {loading ? "Pesquisando..." : "Pesquisar"}
          </Button>
        </Flex>
        {errorSearchRepositorie && <Text>Nenhum repositório encontrado</Text>}
      </Flex>
      {firstRender ? (
        <Box width="100%" color="green" fontWeight={600}>
          Digite no campo acima para realizar uma busca 👆.
        </Box>
      ) : (
        <>
          <VStack spacing={4} width="100%" pb="1rem">
            {loading
              ? Array(5)
                  .fill(0)
                  .map((_, index) => <RepositorySkeleton key={index} />)
              : repositorie?.map((repo) => (
                  <>
                    <RepositoryItem
                      key={repo.id}
                      name={repo.full_name}
                      description={repo.description}
                      imageUrl={repo.owner.avatar_url}
                      onClick={() => {
                        Router.push(`/repository/${repo.id}`);
                      }}
                    />
                  </>
                ))}
            <Flex align="center" gap={8}>
              <Text>
                Página <strong>{page}</strong> de <strong>{totalPages}</strong>
              </Text>
              <Flex gap={4}>
                <Button onClick={handlePreviousPage} disabled={page === 1}>
                  <RiArrowLeftLine />
                </Button>
                <Button onClick={handleNextPage} disabled={page === totalPages}>
                  <RiArrowRightLine />
                </Button>
              </Flex>
            </Flex>
          </VStack>
        </>
      )}
    </VStack>
  );
}
