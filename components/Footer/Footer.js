import { Box, Heading, Button, HStack } from "@chakra-ui/react";

const Footer = () => (
	<div>
		<Box w="100%" h="100px" bgColor="#4e5b68">
			<Heading
				textAlign="center"
				color="white"
				bgGradient="linear-gradient(to right, #f12711, #f5af19)"
				bgClip="text"
			>
				A solo un clic de distancia
			</Heading>
			<HStack spacing="6">
				<Button colorScheme="facebook"> Facebook</Button>
				<Button colorScheme="twitter">Twitter</Button>
				<Button bgColor="black.500">Github</Button>
			</HStack>
		</Box>
	</div>
);

export default Footer;
