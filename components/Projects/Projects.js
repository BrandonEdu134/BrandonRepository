import { Box, Grid, Image, Text, Center, LinkBox, LinkOverlay, Heading } from "@chakra-ui/react";
import projectlink from "../../data/projectlink.json";

const Projects = () => {
	const projInfo = projectlink.project;
	return (
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
					<Box w={["100%", "90%", "90%", "80%"]} h="auto" p={["3", "3", "6", "6"]}>
						<Grid templateColumns="repeat(auto-fit, minmax(400px, 5fr))" gap={2}>
							{projInfo &&
								projInfo.map((item) => (
									<LinkBox
										w={["300px", "350px", "400px", "400px"]}
										h="400px"
										boxShadow="dark-lg"
										bgColor="#00b09b"
										_hover={{ bgColor: "#243B55" }}
									>
										<LinkOverlay href={item.url} target="_blank">
											<Image
												src={item.img}
												alt="Imagen1"
												boxSize="320px"
												w={["300px", "350px", "400px", "400px"]}
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
													{item.name}
												</Text>
											</Heading>
										</LinkOverlay>
									</LinkBox>
								))}
						</Grid>
					</Box>
				</Center>
			</Box>
		</div>
	);
};

export default Projects;
