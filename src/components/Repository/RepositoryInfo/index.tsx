import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface RepositoryInfoProps {
  name: string;
  description: string;
  stars: number;
  forks: number;
  issues: number;
  imageUrl: string;
  children?: React.ReactNode;
}

export function RepositoryInfo({
  name,
  description,
  stars,
  forks,
  issues,
  children,
  imageUrl,
  ...rest
}: RepositoryInfoProps) {
  return (
    <>
      <Flex flexDirection="column" gap="2.5rem">
        <Flex gap="2rem">
          <Box>
            <Image
              src={imageUrl}
              alt={`foto de perfil do github ${name}`}
              borderRadius="50%"
            />
          </Box>
          <Flex flexDirection="column">
            <Heading as="h2">{name}</Heading>
            <Text>{description}</Text>
          </Flex>
        </Flex>
        <Flex gap="5rem">
          <Box>
            <Text fontSize="2.25rem" fontWeight={700}>
              {stars}
            </Text>
            <Text fontSize="1.25rem" color="gray.300">
              Stars
            </Text>
          </Box>
          <Box>
            <Text fontSize="2.25rem" fontWeight={700}>
              {forks}
            </Text>
            <Text fontSize="1.25rem" color="gray.300">
              Forks
            </Text>
          </Box>
          <Box>
            <Text fontSize="2.25rem" fontWeight={700}>
              {issues}
            </Text>
            <Text fontSize="1.25rem" color="gray.300">
              Issues abertas
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
