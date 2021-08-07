import { Box, Grid, Image, Text, Center } from "@chakra-ui/react";

const Projects = () => (
	<div>
		<Box w="100%" h="80px" bgColor="rgb(27, 27, 27)" />
		<Box bgGradient="linear(rgb(27, 27, 27) 15%, #141E30 45%, #243B55 70%)">
			<Box
				color="black"
				textShadow="1px 1px #ff0000"
				fontSize="6.5vh"
				fontFamily="'Style Script', cursive"
				w="50%"
				bgColor="orange.300"
				borderRadius="6px"
				ml="-5px"
				textAlign="end"
				alignItems="flex-end"
			>
				<Text mr="10px">Proyectos realizados</Text>
			</Box>
			<Center>
				<Box w="95%" h="auto" p="6">
					<Grid templateColumns="repeat(auto-fit, minmax(320px, 5fr))" gap="6">
						<Box
							w="320px"
							h="400px"
							border="1px"
							boxShadow="dark-lg"
							borderRadius="10px"
							bgColor="#00b09b"
							colorScheme="white"
						>
							<Image
								src="https://www.nme.com/wp-content/uploads/2020/02/venom-696x442.jpg"
								alt="Imagen1"
								borderRadius="10px"
								boxSize="320px"
								objectFit="cover"
							/>
							<Box
								textAlign="center"
								m="15px"
								fontFamily="'Noto Sans JP', sans-serif"
								fontSize="3.5vh"
								color="white"
							>
								Página tributo
							</Box>
						</Box>
						<Box
							w="320px"
							h="400px"
							border="1px"
							boxShadow="dark-lg"
							borderRadius="10px"
							bgColor="#00b09b"
						>
							<Image
								src="https://www.nme.com/wp-content/uploads/2020/02/venom-696x442.jpg"
								alt="Imagen1"
								borderRadius="10px"
								boxSize="320px"
								objectFit="cover"
							/>
							<Box
								textAlign="center"
								m="15px"
								fontFamily="'Noto Sans JP', sans-serif"
								fontSize="3.5vh"
								color="white"
							>
								Formulario
							</Box>
						</Box>
						<Box
							w="320px"
							h="400px"
							border="1px"
							boxShadow="dark-lg"
							borderRadius="10px"
							bgColor="#00b09b"
						>
							<Image
								src="https://www.nme.com/wp-content/uploads/2020/02/venom-696x442.jpg"
								alt="Imagen1"
								borderRadius="10px"
								boxSize="320px"
								objectFit="cover"
							/>
							<Box
								textAlign="center"
								m="15px"
								fontFamily="'Noto Sans JP', sans-serif"
								fontSize="3.5vh"
								color="white"
							>
								Página Producto
							</Box>
						</Box>
						<Box
							w="320px"
							h="400px"
							border="1px"
							boxShadow="dark-lg"
							borderRadius="10px"
							bgColor="#00b09b"
						>
							<Image
								src="https://www.nme.com/wp-content/uploads/2020/02/venom-696x442.jpg"
								alt="Imagen1"
								borderRadius="10px"
								boxSize="320px"
								objectFit="cover"
							/>
							<Box
								textAlign="center"
								m="15px"
								fontFamily="'Noto Sans JP', sans-serif"
								fontSize="3.5vh"
								color="white"
							>
								Página Información
							</Box>
						</Box>
					</Grid>
				</Box>
			</Center>
		</Box>
	</div>
);

export default Projects;
