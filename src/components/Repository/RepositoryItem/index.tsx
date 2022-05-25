import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { AiOutlineRight } from "react-icons/ai";

interface RepositoryProps {
  name: string;
  description: string;
  imageUrl?: string;
  onClick?: () => void;
}

export function RepositoryItem({
  name,
  description,
  imageUrl,
  onClick,
}: RepositoryProps) {
  return (
    <>
      <Flex
        align="center"
        bg="white"
        borderRadius="5px"
        justifyContent="space-between"
        p="1rem"
        width="100%"
      >
        <Flex gap="1.3rem" align="center">
          <Flex height="80px" width="80px">
            <Image
              src={imageUrl}
              alt={`Icone imagem usuário ${name}`}
              borderRadius="50%"
              height="100%"
              minWidth="80px"
            />
          </Flex>
          <Flex flexDirection="column">
            <Heading as="h2" fontSize="1.5rem">
              {name}
            </Heading>
            <Text fontSize="1.2rem" color="gray.200">
              {description}
            </Text>
          </Flex>
        </Flex>
        <Box onClick={onClick} cursor="pointer" as="a" target="_blank">
          <AiOutlineRight color="gray.100" />
        </Box>
      </Flex>
    </>
  );
}
