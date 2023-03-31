import { Box, Grid, VStack } from "@chakra-ui/react";
import SpecialityItem from "./SpecialityItem";
import Image1 from "./images/1.jpg";
import Image2 from "./images/2.jpg";
import Image3 from "./images/3.jpg";
import Image4 from "./images/4.jpg";

export default function Speciality() {
  return (
    <VStack w="full" py="32" bgImage={Image4} position="relative">
      <Box
        position="absolute"
        w="full"
        h="full"
        top="0"
        bg="rgba(0, 0, 0, 0.1)"
      />
      <Grid w="5xl" templateColumns={"repeat(3, 1fr)"} zIndex={9}>
        <SpecialityItem textTitle="수업 구성" svgUrl={Image1} />
        <SpecialityItem textTitle="일일 일정표" svgUrl={Image2} />
        <SpecialityItem textTitle="연수 일정" svgUrl={Image3} />
      </Grid>
    </VStack>
  );
}
