import { Box, Image } from "@chakra-ui/react";

export default function PortfolioItem({ imgUrl }) {
  return (
    <Box overflow="hidden" rounded="xl" w="300px" h="300px">
      <Image
        objectFit="cover"
        objectPosition="left"
        h="full"
        src={imgUrl}
        transition="0.4s"
        _hover={{ transform: "scale(1.1)" }}
      />
    </Box>
  );
}
