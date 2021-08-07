import { Flex, Box } from "@chakra-ui/react";

const Hero = () => (
	<div>
		<Flex
			bgGradient="linear(rgb(27, 27, 27) 15%, #141E30 45%, #243B55 70%)"
			w="100%"
			h="500px"
			flexDirection="column"
			justify="center"
			fontFamily="'Noto Sans JP', sans-serif"
			alignItems="center"
		>
			<Box
				fontSize="9vh"
				m="5"
				bgGradient="linear(to-l, #00b09b,#96c93d)"
				bgClip="text"
				fontWeight="extrabold"
			>
				<h1>¡Bienvenido!</h1>
			</Box>
			<Box fontSize="3vh" m="3" bgGradient="linear(to-l, #00b09b,#96c93d)" bgClip="text">
				<p>Sitio desarrollado por Brandon</p>
			</Box>
		</Flex>
	</div>
);

export default Hero;
