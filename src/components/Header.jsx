import { useState, useEffect } from "react";
import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/png/logo.png";
import { AiOutlineMenu } from "react-icons/ai";

import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export default function Header() {
  const menuList = [
    { name: "회사소개", link: "test1", link2: "/#1" },
    { name: "장점", link: "test2", link2: "/#2" },
    { name: "커리큘럼", link: "test3", link2: "/#3" },
    { name: "사진", link: "test4", link2: "/#4" },
  ];
  const [scroll, setScroll] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    document.addEventListener("wheel", () => {
      if (window.scrollY < 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });

  const btnRef = useRef();

  return (
    <>
      <HStack
        w="full"
        justifyContent={"center"}
        h="80px"
        boxShadow={"sm"}
        position="fixed"
        transition="0.4s"
        zIndex={999}
        bg={scroll ? "transparent" || "gray.900" : "gray.900"}
      >
        <HStack justifyContent={"space-between"} w="7xl" h="full" px="2">
          <Box h="full" px="4" py="5">
            <Link to="/">
              <Image h="70%" src={Logo} />
            </Link>
          </Box>
          <HStack spacing={8} transition="0.4s">
            <HStack spacing={5} display={{ sm: "none", lg: "block" }}>
              {menuList.map((_, i) =>
                pathname === "/" ? (
                  <LinkScroll
                    key={i}
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass="active"
                    className={menuList[i].link}
                    to={menuList[i].link}
                  >
                    <Text
                      px="4	"
                      as="span"
                      cursor="pointer"
                      color="white"
                      _hover={{ color: "yellow.600" }}
                      _focus={{ color: "yellow.600" }}
                    >
                      {menuList[i].name}
                    </Text>
                  </LinkScroll>
                ) : (
                  <a href={menuList[i].link2}>
                    <Button
                      variant="ghost"
                      _hover={{ color: "yello.600" }}
                      _focus={{ color: "yello.600" }}
                    >
                      {menuList[i].name}
                    </Button>
                  </a>
                )
              )}
            </HStack>
            <HStack spacing={5}>
              <a href="/#5">
                <Button bg="#4090f3" w={{ sm: "100px", md: "120px" }}>
                  <Text fontSize={{ sm: "14px", md: "16px" }}>
                    빠른견적 문의
                  </Text>
                </Button>
              </a>
              <Box p="2" display="none" cursor={"pointer"} ref={btnRef}>
                <AiOutlineMenu size="20px" />
              </Box>
            </HStack>
          </HStack>
        </HStack>
      </HStack>
    </>
  );
}
