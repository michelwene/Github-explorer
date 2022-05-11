import { Box, Flex, Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react";

export function RepositorySkeleton() {
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
            <SkeletonCircle width="80px" height="80px" />
          </Box>
          <Stack spacing={4}>
            <Skeleton height="20px" width="500px" />
            <Skeleton height="20px" width="500px" />
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
