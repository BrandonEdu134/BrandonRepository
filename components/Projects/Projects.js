import { Box, Grid, Image, Text, Center, LinkBox, LinkOverlay, Heading } from "@chakra-ui/react";

const Projects = () => (
	<div>
		<Box w="100%" h="80px" bgColor="rgb(27, 27, 27)" />
		<Box bgGradient="linear(rgb(27, 27, 27) 15%, #141E30 45%, #243B55 70%)" zIndex="2">
			<Box
				color="black"
				textShadow="1px 1px #ff0000"
				fontSize="6.5vh"
				fontFamily="'Style Script', cursive"
				w={["90%", "60%", "60%", "40%"]}
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
					<Grid templateColumns="repeat(auto-fit, minmax(600px, 5fr))" gap="6">
						<LinkBox
							w={["300px", "400px", "500px", "600px"]}
							h="400px"
							boxShadow="dark-lg"
							borderRadius="15px"
							bgColor="#00b09b"
						>
							<LinkOverlay
								href="https://codepen.io/BORbetz/full/ZEKeErg"
								target="_blank"
							>
								<Image
									src="https://www.nme.com/wp-content/uploads/2020/02/venom-696x442.jpg"
									alt="Imagen1"
									borderRadius="15px"
									boxSize="320px"
									w="600px"
									objectFit="cover"
								/>
								<Heading>
									<Text
										textAlign="center"
										m="10px"
										fontFamily="'Noto Sans JP', sans-serif"
										fontSize={["3vh", "3vh", "4vh", "4vh"]}
										color="gray.40"
									>
										Página tributo
									</Text>
								</Heading>
							</LinkOverlay>
						</LinkBox>
						<LinkBox
							w={["300px", "400px", "500px", "600px"]}
							h="400px"
							boxShadow="dark-lg"
							borderRadius="15px"
							bgColor="#00b09b"
						>
							<LinkOverlay
								href="https://codepen.io/BORbetz/full/ZEKeErg"
								target="_blank"
							>
								<Image
									src="https://www.nme.com/wp-content/uploads/2020/02/venom-696x442.jpg"
									alt="Imagen1"
									borderRadius="15px"
									boxSize="320px"
									w="600px"
									objectFit="cover"
								/>
								<Heading>
									<Text
										textAlign="center"
										m="10px"
										fontFamily="'Noto Sans JP', sans-serif"
										fontSize={["3vh", "3vh", "4vh", "4vh"]}
										color="gray.40"
									>
										Formulario
									</Text>
								</Heading>
							</LinkOverlay>
						</LinkBox>
						<LinkBox
							w={["300px", "400px", "500px", "600px"]}
							h="400px"
							boxShadow="dark-lg"
							borderRadius="15px"
							bgColor="#00b09b"
						>
							<LinkOverlay
								href="https://codepen.io/BORbetz/full/ZEKeErg"
								target="_blank"
							>
								<Image
									src="https://www.nme.com/wp-content/uploads/2020/02/venom-696x442.jpg"
									alt="Imagen1"
									borderRadius="15px"
									boxSize="320px"
									w="600px"
									objectFit="cover"
								/>
								<Heading>
									<Text
										textAlign="center"
										m="10px"
										fontFamily="'Noto Sans JP', sans-serif"
										fontSize={["3vh", "3vh", "4vh", "4vh"]}
										color="gray.40"
									>
										Página Producto
									</Text>
								</Heading>
							</LinkOverlay>
						</LinkBox>
						<LinkBox
							w={["300px", "400px", "500px", "600px"]}
							h="400px"
							boxShadow="dark-lg"
							borderRadius="15px"
							bgColor="#00b09b"
						>
							<LinkOverlay
								href="https://codepen.io/BORbetz/full/ZEKeErg"
								target="_blank"
							>
								<Image
									src="https://www.nme.com/wp-content/uploads/2020/02/venom-696x442.jpg"
									alt="Imagen1"
									borderRadius="15px"
									boxSize="320px"
									w="600px"
									objectFit="cover"
								/>
								<Heading>
									<Text
										textAlign="center"
										m="10px"
										fontFamily="'Noto Sans JP', sans-serif"
										fontSize={["3vh", "3vh", "4vh", "4vh"]}
										color="gray.40"
									>
										Página Información
									</Text>
								</Heading>
							</LinkOverlay>
						</LinkBox>
					</Grid>
				</Box>
			</Center>
		</Box>
	</div>
);

export default Projects;
