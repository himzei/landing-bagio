import { Box, Image, Text, VStack } from "@chakra-ui/react";
import Slider from "react-slick";
import Main1 from "./images/1.jpg";
import Main2 from "./images/2.jpg";
import Main3 from "./images/3.jpg";
import Main4 from "./images/4.jpg";
import Main5 from "./images/5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <VStack
        position="absolute"
        top="0"
        w="full"
        h="full"
        spacing="10"
        alignItems="center"
        justifyContent="center"
      >
        <VStack w="7xl" alignItems="flex-start" spacing={8}>
          <VStack alignItems="flex-start" spacing="0">
            <Text
              pl="4"
              fontWeight="200"
              fontSize={{ sm: "48", md: "36" }}
              lineHeight="20px"
              color="white"
              opacity="0.8"
            >
              2023 여름방학캠프
            </Text>
            <Text
              fontWeight="900"
              fontSize={{ sm: "48", md: "70" }}
              color="white"
              opacity="0.9"
              letterSpacing={"-5px"}
            >
              JUNIOR Summer Camp
            </Text>
            <Text
              fontSize="20"
              fontWeight={600}
              px="10"
              py="2"
              rounded="xl"
              bg="rgba(255, 255, 255, 0.5)"
            >
              필리핀 클락 경제 자유 특구 내 최적의 학습 환경을 갖춘 프리미엄
              캠프
            </Text>
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
      </VStack>
    </Box>
  );
}
