import { Flex, Text } from "@chakra-ui/react";
import { MdExplore } from "react-icons/md";

export function Logo() {
  return (
    <Flex as="header" width="100%" gap={4} mt={10}>
      <MdExplore fontSize="32px" />
      <Text>
        <strong>github</strong>_explorer
      </Text>
    </Flex>
  );
}
