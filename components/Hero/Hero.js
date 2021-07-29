import { Button } from "@chakra-ui/react";

const Hero = () => {
	const a = "Este es";
	const b = "Hero";
	return (
		<div>
			{a} {b}
			<Button colorScheme="facebook">Facebook</Button>
		</div>
	);
};

export default Hero;
