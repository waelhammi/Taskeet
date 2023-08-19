import { Box, Text } from "@chakra-ui/react";
function Footer() {
  return (
    <>
      <Box display="flex" justifyContent="center" mt="10">
        <Text pr="1.5" fontSize="1xl" color="ivory">
          Made with ❤️ by
        </Text>
        <Text color="lightgreen" fontSize="1xl">
          <a href="https://www.linkedin.com/in/hammi-wa%C3%ABl/" target="_blank" rel="noreferrer">
            Hammi Wael
          </a>
        </Text>
      </Box>
    </>
  );
}


export default Footer;
