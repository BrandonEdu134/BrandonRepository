import { VStack, Box, StackDivider, Text, Image, Divider } from "@chakra-ui/react";

const Inicio = () => (
	<div id="Inicio">
		<VStack
			bgColor="#243B55"
			divider={<StackDivider borderColor="gray" />}
			align="center"
			fontFamily="'Noto Sans JP', sans-serif"
			color="white"
			h="auto"
		>
			<Divider orientation="vertical" />
			<Box bg="#1c2f44" w="70%" mb="40px">
				<Box h="40px" fontSize="1.7vw" ml="6">
					¿Qué son las Ciencias Computacionales?
				</Box>
				<Box h="auto" w="85%" m="auto">
					<Text textAlign="justify" m="4">
						Las Ciencias Computacionales (CC) se dedican principalmente al estudio del
						almacenamiento, transformación y transferencia de información en las
						computadora.
					</Text>
					<Text textAlign="justify" m="4">
						Estas funciones son realizadas desde perspectivas teóricas y prácticas; en
						la parte teórica por medio del diseño, eficiencia y aplicación de algoritmos
						(secuencia de acciones para resolver un problema o ejecutar una tarea) y en
						la parte práctica, involucra la implementación de dichos algoritmos en
						hardware y software de computadoras.
					</Text>
					<Text textAlign="justify" m="4">
						Las CC tienen muchas especialidades o campos de estudio. Algunos de ellos
						son: estructuras de datos, metodología y lenguajes de programación,
						ingeniería del software, inteligencia artificial, teoría de autómatas,
						sistemas de base de datos, computación paralela, computación gráfica y
						sistemas operativos entre otros.
					</Text>
				</Box>
				<Box h="40px" fontSize="1.7vw" ml="6">
					¿Qué hace un licenciado en Ciencias Computacionales?
				</Box>
				<Box h="auto" w="85%" m="auto">
					<Text textAlign="justify" m="4">
						El Licenciado en Ciencias Computacionales tiene una formación integral que
						le da la capacidad de analizar situaciones, entornos y problemas propios de
						ser tratados mediante sistemas computacionales, para ofrecer soluciones
						complejas, resultantes de la creación, adecuación, integración o selección
						de productos y servicios computacionales. Además cuenta con una sólida
						formación en técnicas de análisis y diseño de sistemas de información, y en
						la configuración de ambientes de servicios de cómputo y redes, así como
						dominio de herramientas de programación e ingeniería de software, con el fin
						de construir programas y sistemas de aplicación con características de
						productos terminados y competitivo.
					</Text>
					<Text textAlign="justify" m="4">
						El profesional en Ciencias Computacionales se puede desempeñar en áreas como
						la administración de la función informática, en análisis y diseño de bases
						de datos, sistemas operativos y compiladores, lenguajes de programación,
						redes de computadoras, desarrollo de aplicaciones en internet, sistemas
						inteligentes y negocios electrónicos. De igual manera podrá desempeñarse en
						cualquier empresa que cuente o pretenda introducir para su operación
						sistemas de cómputo, ocupando para ello los puestos de analista de sistemas,
						jefe de proyectos de software, jefe de soporte técnico, director de
						informática, administrador de centros de cómputo, gerente de producción de
						equipo de cómputo, entre otros; además de poder actuar como docente o
						investigador en instituciones de educación superior o como consultor
						empresarial.
					</Text>
				</Box>
			</Box>
		</VStack>

		<Box bgGradient="linear( #243B55 45%, #141E30 70%)" w="100%">
			<Divider size="70%" />
			<Image
				src="https://www.uaeh.edu.mx/campus/icap/imagenes/quienes-somos/logo_uaeh_2017_mr.png"
				alt="logo UAEH"
				w="400px"
				m="auto"
				p="40px"
			/>
		</Box>
	</div>
);

export default Inicio;
