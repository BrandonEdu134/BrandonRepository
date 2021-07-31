import { Box, Flex } from "@chakra-ui/react";

const Navbar = () => (
	<div>
		<Flex bg="black" position="fixed" width="100%" justify="flex-end">
			<Box as="button" p="4" textColor="white">
				Inicio
			</Box>
			<Box as="button" p="4" textColor="white">
				Trabajos
			</Box>
			<Box as="button" p="4" textColor="white">
				Contacto
			</Box>
		</Flex>
	</div>
);

export default Navbar;
