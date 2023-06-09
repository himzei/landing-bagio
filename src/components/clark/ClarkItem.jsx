import { Box, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";

export default function ClarkItem({
  imgUrl,
  textTitle1,
  textTitle2,
  textContent,
  orderNum = "0",
}) {
  return (
    <Grid
      templateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
      gap="16"
    >
      <GridItem order={{ sm: "0", lg: orderNum }}>
        <Box rounded="2xl" h="300px" overflow="hidden" boxShadow="xl">
          <Image
            h="full"
            src={imgUrl}
            _hover={{ transform: "scale(1.2)" }}
            transition="0.6s"
          />
        </Box>
      </GridItem>
      <GridItem>
        <VStack alignItems="flex-start">
          <Text as="span" fontWeight={600} fontSize="36">
            <Text as="span" color="#4090f3">
              {textTitle1}
            </Text>
            {textTitle2}
          </Text>
          <Text fontSize="20">{textContent}</Text>
        </VStack>
      </GridItem>
    </Grid>
  );
}
