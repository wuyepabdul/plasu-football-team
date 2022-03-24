import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    Stack,
    Image,
    Text,
    Select,
    Divider,
    Spacer,
  } from "@chakra-ui/react";
  import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
  
  const Links = ["Shop", "Help", "Blog"];
  const NavLink = ({ children }) => (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        color: "gray.400",
      }}
      href={"#"}
    >
      {children}
    </Link>
  );
  
  const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <Box pt="2"  alignItems="stretch">
        <Box px="10">
          <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            color={"black.100"}
            minH={"60px"}
            py={{ base: 2 }}
          >
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Box>
                  <h1>Logo</h1>
                {/* <Image src={logo} boxSize="150px" objectFit="contain" /> */}
              </Box>
              <HStack
                as={"nav"}
                spacing={6}
                display={{ base: "none", md: "flex" }}
              >
                <li>1</li>
                <li>1</li>
                <li>1</li>
              </HStack>
            </HStack>
            <HStack spacing={8} alignItems={"center"}>
              <NavLink>Account</NavLink>
            </HStack>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
        <Divider bgColor="gray.300" orientation="horizontal" />
        
      </Box>
    );
  }
  
  export default Navbar;