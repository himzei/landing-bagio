import {
  Box,
  GridItem,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SpecialityItem({ textTitle, svgUrl, modalUrl }) {
  useEffect(() => {
    AOS.init();
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <GridItem
        align="center"
        rounded="full"
        overflow="hidden"
        data-aos="fade-in"
      >
        <VStack h="auto" role="group" bg="custom.100" w="320px">
          <Box w="full" h="56" overflow={"hidden"}>
            <Image
              transition="0.4s"
              _groupHover={{
                transform: "scale(1.2)",
              }}
              w="full"
              h="56"
              objectFit={"cover"}
              objectPosition="center"
              src={svgUrl}
            />
          </Box>
          <Box
            w="full"
            h="28"
            py={2}
            px={2}
            position="relative"
            overflow={"hidden"}
            cursor={"pointer"}
            onClick={onOpen}
          >
            <Box
              bg="gray.800"
              position="absolute"
              w="full"
              h="full"
              top="0"
              left="0"
              transition="0.4s"
              _groupHover={{
                top: "160px",
              }}
            />
            <Box
              position="absolute"
              bottom={-5}
              right={-5}
              w="30px"
              h="30px"
              bg="transparent"
              transform={"rotate(45deg) scale(2)"}
            />
            <HStack
              position="absolute"
              top="4"
              left="50%"
              transform={"translateX(-50%)"}
            >
              <Text fontSize={24} fontWeight="600" color="white">
                {textTitle}
              </Text>

              <HiOutlineArrowNarrowRight color="white" />
            </HStack>
          </Box>
        </VStack>
        <Modal isOpen={isOpen} onClose={onClose} size="4xl">
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Image src={modalUrl} />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </GridItem>
    </>
  );
}
