import { Heading, HStack, VStack, Link, Text, Image } from "@chakra-ui/react";
import footerlink from "../../data/footerlink.json";

const Footer = () => {
	const elements = footerlink.networks;
	return (
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
				<HStack spacing="10" pb="30px">
					{elements &&
						elements.map((item) => (
							<Link href={item.url} isExternal="true">
								<VStack>
									<Image
										src={item.icons}
										boxSize="40px"
										_hover={{ boxSize: "45px" }}
									/>
									<Text color="grey.500" fontWeight="bold">
										{item.name}
									</Text>
								</VStack>
							</Link>
						))}
				</HStack>
			</VStack>
		</div>
	);
};

export default Footer;
