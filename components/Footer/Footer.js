import { Heading, Button, HStack, VStack } from "@chakra-ui/react";

const Footer = () => (
	<div>
		<VStack w="100%" h="auto" bgColor="#4e5b68" align="center">
			<Heading
				color="white"
				bgGradient="linear-gradient(to right, #f12711, #f5af19)"
				bgClip="text"
				fontSize={["20px", "30px", "30px", "30px"]}
				p="8"
			>
				A solo un clic de distancia
			</Heading>
			<HStack spacing="6" pb="30px">
				<Button colorScheme="facebook"> Facebook</Button>
				<Button colorScheme="twitter">Twitter</Button>
				<Button bgColor="black.500">Github</Button>
			</HStack>
		</VStack>
	</div>
);

export default Footer;
