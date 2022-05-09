import { Button, Flex, Heading, Input, VStack } from "@chakra-ui/react";
import { Logo } from "../components/Logo";
import { RepositoryItem } from "../components/RepositoryItem";

export default function Home() {
  return (
    <VStack as="section" maxWidth="714px" spacing={28} align="flex-start">
      <Logo />
      <Flex flexDirection="column" gap={10}>
        <Heading as="h1" fontSize="3rem" fontWeight={700}>
          Explore repositórios no Github.
        </Heading>
        <Flex as="form" height="4.5rem">
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
            loadingText="Pesquisando..."
          >
            Pesquisar
          </Button>
        </Flex>
      </Flex>
      <VStack spacing={4} width="100%" pb="1rem">
        <RepositoryItem
          name="tiagoluchtenberg/repo"
          description="Descrição do repo"
          imageUrl="/Me 1.svg"
        />
        <RepositoryItem
          name="tiagoluchtenberg/repo"
          description="Descrição do repo"
          imageUrl="/Me 1.svg"
        />
        <RepositoryItem
          name="tiagoluchtenberg/repo"
          description="Descrição do repo"
          imageUrl="/Me 1.svg"
        />

        <RepositoryItem
          name="tiagoluchtenberg/repo"
          description="Descrição do repo"
          imageUrl="/Me 1.svg"
        />
      </VStack>
    </VStack>
  );
}
