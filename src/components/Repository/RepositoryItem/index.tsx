import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { AiOutlineRight } from "react-icons/ai";

interface RepositoryProps {
  name: string;
  description: string;
  children?: React.ReactNode;
  imageUrl?: string;
}

export function RepositoryItem({
  name,
  description,
  imageUrl,
  children,
  ...rest
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
          <Box>
            <Image
              src={imageUrl}
              alt={`Icone imagem usuário ${name}`}
              borderRadius="50%"
              height="80px"
              width="80px"
            />
          </Box>
          <Flex flexDirection="column">
            <Heading as="h2" fontSize="1.5rem">
              {name}
            </Heading>
            <Text fontSize="1.2rem" color="gray.200">
              {description}
            </Text>
          </Flex>
        </Flex>
        <Box>
          <AiOutlineRight color="gray.100" />
        </Box>
      </Flex>
    </>
  );
}
