import { Grid, HStack, Text, VStack } from "@chakra-ui/react";
import PortfolioItem from "./PortfolioItem";
import Img1 from "./images/1.png";
import Img2 from "./images/2.png";
import Img3 from "./images/3.png";
import Img4 from "./images/4.png";
import Img5 from "./images/5.png";
import Img6 from "./images/6.png";
import Img7 from "./images/7.png";
import Img8 from "./images/8.png";
import Img9 from "./images/9.png";
import Img10 from "./images/10.png";
import Img11 from "./images/11.png";
import Img12 from "./images/12.png";

import Img13 from "./images/13.png";
import Img14 from "./images/14.png";
import Img15 from "./images/15.png";
import Img16 from "./images/16.png";
import Img17 from "./images/17.png";
import Img18 from "./images/18.png";
import Img19 from "./images/19.png";
import Img20 from "./images/20.png";

// 캠프생활
import Img21 from "./images/21.png";
import Img22 from "./images/22.png";
import Img23 from "./images/23.png";
import Img24 from "./images/24.png";
import Img25 from "./images/25.png";
import Img26 from "./images/26.png";
import Img27 from "./images/27.png";
import Img28 from "./images/28.png";
import Img29 from "./images/29.png";
import Img30 from "./images/30.png";
import Img31 from "./images/31.png";
import Img32 from "./images/32.png";

// 주말액티비티
import Img33 from "./images/33.png";
import Img34 from "./images/34.png";
import Img35 from "./images/35.png";
import Img36 from "./images/36.png";
import Img37 from "./images/37.png";
import Img38 from "./images/38.png";
import Img39 from "./images/39.png";
import Img40 from "./images/40.png";
import Img41 from "./images/41.png";
import Img42 from "./images/42.png";
import Img43 from "./images/43.png";
import Img44 from "./images/44.png";
import Img45 from "./images/45.png";
import Img46 from "./images/46.png";
import Img47 from "./images/47.png";
import Img48 from "./images/48.png";

export default function Portfolio() {
  return (
    <VStack py="32" w="full" alignItems="center">
      <VStack w="7xl" spacing="16">
        {/* 학습시설 */}
        <VStack w="full" spacing="8" alignItems="center">
          <HStack w="full" fontSize={28}>
            <Text>바기오 주니어 캠프</Text>
            <Text fontWeight={600} color="custom.100">
              학습시설 & 기숙사
            </Text>
          </HStack>
          <Grid w="full" templateColumns={"repeat(4, 1fr)"} gap="2">
            <PortfolioItem imgUrl={Img1} />
            <PortfolioItem imgUrl={Img2} />
            <PortfolioItem imgUrl={Img3} />
            <PortfolioItem imgUrl={Img4} />
            <PortfolioItem imgUrl={Img5} />
            <PortfolioItem imgUrl={Img6} />
            <PortfolioItem imgUrl={Img7} />
            <PortfolioItem imgUrl={Img8} />
            <PortfolioItem imgUrl={Img9} />
            <PortfolioItem imgUrl={Img10} />
            <PortfolioItem imgUrl={Img11} />
            <PortfolioItem imgUrl={Img12} />
          </Grid>
        </VStack>

        {/* 편의시설 */}
        <VStack w="full" spacing="8" alignItems="center">
          <HStack w="full" fontSize={28}>
            <Text>바기오 주니어 캠프</Text>
            <Text fontWeight={600} color="custom.100">
              편의시설
            </Text>
          </HStack>
          <Grid w="full" templateColumns={"repeat(4, 1fr)"} gap="2">
            <PortfolioItem imgUrl={Img13} />
            <PortfolioItem imgUrl={Img14} />
            <PortfolioItem imgUrl={Img15} />
            <PortfolioItem imgUrl={Img16} />
            <PortfolioItem imgUrl={Img17} />
            <PortfolioItem imgUrl={Img18} />
            <PortfolioItem imgUrl={Img19} />
            <PortfolioItem imgUrl={Img20} />
          </Grid>
        </VStack>

        {/* 캠프생활 */}
        <VStack w="full" spacing="8" alignItems="center">
          <HStack w="full" fontSize={28}>
            <Text>바기오 주니어 캠프</Text>
            <Text fontWeight={600} color="custom.100">
              캠프생활
            </Text>
          </HStack>
          <Grid w="full" templateColumns={"repeat(4, 1fr)"} gap="2">
            <PortfolioItem imgUrl={Img21} />
            <PortfolioItem imgUrl={Img22} />
            <PortfolioItem imgUrl={Img23} />
            <PortfolioItem imgUrl={Img24} />
            <PortfolioItem imgUrl={Img25} />
            <PortfolioItem imgUrl={Img26} />
            <PortfolioItem imgUrl={Img27} />
            <PortfolioItem imgUrl={Img28} />
            <PortfolioItem imgUrl={Img29} />
            <PortfolioItem imgUrl={Img30} />
            <PortfolioItem imgUrl={Img31} />
            <PortfolioItem imgUrl={Img32} />
          </Grid>
        </VStack>

        {/* 액티비티 */}
        <VStack w="full" spacing="8" alignItems="center">
          <HStack w="full" fontSize={28}>
            <Text>바기오 주니어 캠프</Text>
            <Text fontWeight={600} color="custom.100">
              주말액티비티
            </Text>
          </HStack>
          <Grid w="full" templateColumns={"repeat(4, 1fr)"} gap="2">
            <PortfolioItem imgUrl={Img33} />
            <PortfolioItem imgUrl={Img34} />
            <PortfolioItem imgUrl={Img35} />
            <PortfolioItem imgUrl={Img36} />
            <PortfolioItem imgUrl={Img37} />
            <PortfolioItem imgUrl={Img38} />
            <PortfolioItem imgUrl={Img39} />
            <PortfolioItem imgUrl={Img40} />
            <PortfolioItem imgUrl={Img41} />
            <PortfolioItem imgUrl={Img42} />
            <PortfolioItem imgUrl={Img43} />
            <PortfolioItem imgUrl={Img44} />
            <PortfolioItem imgUrl={Img45} />
            <PortfolioItem imgUrl={Img46} />
            <PortfolioItem imgUrl={Img47} />
            <PortfolioItem imgUrl={Img48} />
          </Grid>
        </VStack>
      </VStack>
    </VStack>
  );
}
