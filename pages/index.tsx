import { useAtom } from "jotai";
import { exampleAtom } from "src/lib/utils/atoms";
import { VStack, HStack, Text, Button } from "@chakra-ui/react";

const HomePage = () => {
  const [example, setExample] = useAtom(exampleAtom);

  return (
    <VStack w="100vw" h="100vh" justify="center" align="center">
      <Text fontSize="20px">{example}</Text>
      <HStack>
        <Button
          fontSize="20px"
          onClick={() => setExample(example > 0 ? example - 1 : 0)}
        >
          -1
        </Button>
        <Button fontSize="20px" onClick={() => setExample(example + 1)}>
          +1
        </Button>
      </HStack>
    </VStack>
  );
};

export default HomePage;
