import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Logo } from "../components/Logo";
import { RepositoryItem } from "../components/Repository/RepositoryItem";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Form/input";
import { api } from "../services/api";
import { useEffect, useState } from "react";
import { IRepositoryData } from "../types/repository";
import Router from "next/router";
import { RepositorySkeleton } from "../components/Repository/RepositoryItem/skeleton";

type FormInputFields = {
  name?: string;
};

export interface IProps {
  repositories: IRepositoryData[];
}

const schemaFromInputField = yup.object({
  name: yup.string().required("Digite o nome do repositório"),
});

export default function Home({ repositories: initialData }: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schemaFromInputField),
  });

  const [loading, setLoading] = useState(false);
  const [repositorie, setRepositorie] =
    useState<IRepositoryData[]>(initialData);
  const [firstRender, setFirstRender] = useState(true);

  async function handleSubmitForm(data: FormInputFields) {
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const pageSort = Math.floor(Math.random() * pages.length);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      setLoading(true);
      const response = await api.get(`/search/repositories?q=${data.name}`, {
        params: {
          page: pageSort,
          per_page: 5,
        },
      });

      setRepositorie(response.data.items);
      setFirstRender(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

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
        <Flex
          as="form"
          height="4.5rem"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <Input
            bg="white"
            border="none"
            borderRightRadius="0"
            colorScheme="whiteAlpha"
            height="100%"
            placeholder="Digite aqui"
            {...register("name")}
            error={errors.name}
          />
          <Button
            type="submit"
            height="100%"
            colorScheme="green"
            minWidth="210px"
            borderLeftRadius="0"
            loadingText="Pesquisando..."
            isLoading={isSubmitting}
          >
            Pesquisar
          </Button>
        </Flex>
      </Flex>
      {firstRender ? (
        <Box width="100%" color="green" fontWeight={600}>
          Digite no campo acima para realizar uma busca 👆.
        </Box>
      ) : (
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
        </VStack>
      )}
    </VStack>
  );
}
