import { Box, Flex, Link } from "@chakra-ui/react";

const Navbar = () => (
	<div>
		<Flex
			bgColor="rgb(27, 27, 27)"
			position="fixed"
			w="100%"
			justify="flex-end"
			fontFamily="'Noto Sans JP', sans-serif"
			fontSize="2.4vh"
			zIndex="1"
		>
			<Link href="/">
				<Box m="1" as="button" p="4" textColor="#c4c4c4" _hover={{ fontSize: "16px" }}>
					INICIO
				</Box>
			</Link>
			<Link href="/Trabajos">
				<Box m="1" as="button" p="4" textColor="#c4c4c4" _hover={{ fontSize: "16px" }}>
					TRABAJOS
				</Box>
			</Link>
			<Link href="/">
				<Box m="1" as="button" p="4" textColor="#c4c4c4" _hover={{ fontSize: "16px" }}>
					CONTACTO
				</Box>
			</Link>
		</Flex>
	</div>
);

export default Navbar;
