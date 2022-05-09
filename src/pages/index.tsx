import { Button, Flex, Heading, Input, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Logo } from "../components/Logo";
import { RepositoryItem } from "../components/Repository/RepositoryItem";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormInputFields = {
  name?: string;
};

const schemaFromInputField = yup.object({
  name: yup.string().required("O nome é obrigatório"),
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schemaFromInputField),
  });

  async function handleSubmitForm(data: FormInputFields) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <VStack as="section" maxWidth="714px" spacing={28} align="flex-start">
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
      <VStack spacing={4} width="100%" pb="1rem">
        <RepositoryItem
          name="tiagoluchtenberg/repo"
          description="Descrição do repo"
          imageUrl="/Me1.svg"
        />
        <RepositoryItem
          name="tiagoluchtenberg/repo"
          description="Descrição do repo"
          imageUrl="/Me1.svg"
        />
        <RepositoryItem
          name="tiagoluchtenberg/repo"
          description="Descrição do repo"
          imageUrl="/Me1.svg"
        />

        <RepositoryItem
          name="tiagoluchtenberg/repo"
          description="Descrição do repo"
          imageUrl="/Me1.svg"
        />
      </VStack>
    </VStack>
  );
}
