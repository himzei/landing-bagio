import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Slider from "react-slick";
import Main1 from "./images/1.jpg";
import Main2 from "./images/2.jpg";
import Main3 from "./images/3.jpg";
import Main4 from "./images/4.jpg";
import Main5 from "./images/5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsCheck2Square } from "react-icons/bs";

export default function Main() {
  const mainImages = [Main1, Main2, Main3, Main4, Main5];
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: false,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <Box w="full" h="100vh" position="relative">
      <Slider {...settings}>
        {mainImages?.map((image, index) => (
          <Box h="100vh" key={index} position="relative">
            <Image
              objectFit="cover"
              objectPosition="center center"
              w="full"
              h="full"
              src={image}
            />
            <Box
              bgGradient={
                "linear(to-r, rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))"
              }
              position="absolute"
              w="full"
              h="full"
              top="0"
              left="0"
            />
          </Box>
        ))}
      </Slider>
      <VStack position="absolute" w="full" top="30%" spacing="10">
        <VStack>
          <Text
            fontWeight="200"
            fontSize={{ sm: "48", md: "90" }}
            color="white"
            lineHeight={{ sm: "60px", md: "85px" }}
            opacity="0.8"
          >
            학습공백없는
          </Text>
          <Text
            fontWeight="900"
            fontSize={{ sm: "48", md: "90" }}
            color="white"
            lineHeight={{ sm: "60px", md: "85px" }}
            opacity="0.9"
          >
            세부한달살기
          </Text>
        </VStack>
        <VStack alignItems="flex-start" color="white" spacing="0" px="8">
          <HStack>
            <BsCheck2Square />
            <Text>미국 특목고 & 대입 시험 무료 체험(중고등학생)</Text>
          </HStack>
          <HStack>
            <BsCheck2Square />
            <Text>무료 입시 세미나(중고등학생)</Text>
          </HStack>
          <HStack>
            <BsCheck2Square />
            <Text>무료 셔틀 서비스</Text>
          </HStack>
        </VStack>
        <Box
          bg="rgba(255, 255, 255, 0.1)"
          px="20"
          py="4"
          rounded="full"
          cursor="pointer"
          border="1px"
          borderColor="rgba(255, 255, 255, 0.2)"
          transition="0.8s"
          _hover={{
            bg: "yellow.600",
          }}
        >
          <a href="/#6">
            <Text color="white" fontWeight="600">
              상담신청하기
            </Text>
          </a>
        </Box>
      </VStack>
    </Box>
  );
}
