import { Box, Image, Text, VStack } from "@chakra-ui/react";
import ClarkItem from "./ClarkItem";
import Clark1 from "./images/1.jpg";
import Clark2 from "./images/2.jpg";
import Clark3 from "./images/3.jpg";
import Clark4 from "./images/4.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Clark() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <VStack w="full" alignItems="center" bg="gray.100" py="32">
      <VStack w="7xl" spacing={32}>
        <VStack
          data-aos="zoom-in-up"
          w="full"
          alignItems="flex-start"
          spacing="8"
        >
          <VStack spacing="0" alignItems="flex-start">
            <Text fontSize="20">Junior Camp in Clark</Text>
            <Text fontWeight={900} fontSize="40">
              왜 클락인가?
            </Text>
          </VStack>
          <Box w="full" h="320px" overflow="hidden" rounded="xl">
            <Image
              w="full"
              src={Clark1}
              objectFit="cover"
              objectPosition={"center top"}
            />
          </Box>
          <Text fontSize="20">
            필리핀에서 볼 수 있는 미국적 환경 Clark City(클락)은 1991년 미군
            철수 이후 필리핀 정부에서 경제 자유특구로 지정되어 최근 북부
            거점도시로 빠르게 북상하는 비즈니스 항공기 산업, 레저 경제적
            중심지로 변화하고 있는 지역입니다. 클락 공군 기지가 있어, 필리핀
            교통의 요충지이며, 필리핀에서 가장 안전하고, 외국인이 많이 거주하며,
            전력, 상하수도, 치안 관리가 독립적으로 운영되는 안전한 지역입니다.
          </Text>
        </VStack>
        <VStack w="full" spacing={16}>
          <ClarkItem
            imgUrl={Clark2}
            textTitle1="안전"
            textTitle2="합니다"
            textContent="필리핀 내 안전성 1위 지역 대통령 직속 경제자유특구로 지정 24시간 경비
          치안 관리시스템, 외부인 출입통제시스템"
          />
          <ClarkItem
            orderNum="1"
            imgUrl={Clark3}
            textTitle1="편리"
            textTitle2="합니다"
            textContent="클락 국제공항 인접, 종합병원 10분, 개인병원 24시간, 응급실 2분 이내, 7갱의 세계적인 골프CC, 다양한 레져시설 및 편의시설 교통의 요충지"
          />
          <ClarkItem
            imgUrl={Clark4}
            textTitle1="쾌적"
            textTitle2="합니다"
            textContent="매연이 없고 아름다운 자연환경으로 녹지 면적이 넓고 세계적인 수준의 여가 및 휴양시설"
          />
        </VStack>
      </VStack>
    </VStack>
  );
}
