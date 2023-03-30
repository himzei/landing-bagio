import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function About() {
  return (
    <HStack w="full" py="32" justifyContent={"center"}>
      <Grid
        templateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        w="7xl"
        rowGap={{ sm: "16", lg: "0" }}
      >
        <GridItem w="full" display={"flex"} justifyContent="center">
          <VStack spacing={0}>
            <Text
              fontWeight={900}
              fontSize={{ sm: "300", lg: "460" }}
              my={{ sm: "-20", lg: "-40" }}
              bgImage={
                "url(https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)"
              }
              backgroundPosition="bottom"
              backgroundSize={"cover"}
              backgroundClip={"text"}
            >
              14
            </Text>
            <Text fontWeight={600} fontSize={20} px={{ sm: "4", lg: "8" }}>
              Years Of Experience With Creative Team
            </Text>
          </VStack>
        </GridItem>
        <GridItem
          h="full"
          display={"flex"}
          alignItems="center"
          px={{ sm: "8", lg: "0" }}
        >
          <VStack
            alignItems={"flex-start"}
            H="full"
            justifyContent={"center"}
            spacing="6"
          >
            <VStack spacing={2} alignItems="flex-start">
              <Text fontSize="20">14년의 노하우와 경험</Text>
              <Text
                fontWeight={900}
                fontSize={{ sm: "36", lg: "48" }}
                lineHeight={{ sm: "48px", lg: "56px" }}
                letterSpacing={-1}
              >
                고객이 원하는 것은
                <br /> 아이원이 추구하는 방향입니다.
              </Text>
            </VStack>
            <Box borderLeft="4px" borderColor="red.500" px="4" py="2">
              <Text fontWeight={600} fontSize={{ sm: "16", lg: "20" }}>
                아이원은 수년간의 경험과 노하우로 안정된 필리핀 유학경험과
                고객중심의 서비스로 진행할 것을 약속드립니다.
              </Text>
            </Box>
            <Text>
              1. 연수가 꼭 필요하고 성공할 만 한 학생들에게 등록을 권합니다.{" "}
              <br />
              2. 필요한 결과를 만들기에 가장 적절한 기간만 등록을 권합니다.{" "}
              <br />
              3. 내 자녀, 가족이 다닐 수 있는 학원으로 안내를 해 드립니다.
            </Text>
            <Button>빠른견적문의</Button>
          </VStack>
        </GridItem>
      </Grid>
    </HStack>
  );
}
