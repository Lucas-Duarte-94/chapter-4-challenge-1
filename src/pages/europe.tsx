import { Box, Flex, Heading, HStack, Image, SimpleGrid, Stack, Text, Tooltip } from "@chakra-ui/react";
import { Header } from "../components/Header";

const countryInfo = [
    {
        country: 'Reino Unido',
        city: 'Londres',
        flagImage: '/uk-ellipse.svg',
        cityImage: '/londres.svg'
    },
    {
        country: 'França',
        city: 'Paris',
        flagImage: '/fr-ellipse.svg',
        cityImage: '/paris.svg'
    },
    {
        country: 'Itália',
        city: 'Roma',
        flagImage: '/it-ellipse.svg',
        cityImage: '/roma.svg'
    },
    {
        country: 'República tcheca',
        city: 'Praga',
        flagImage: '/rep_tcheca-ellipse.svg',
        cityImage: '/praga.svg'
    },
    {
        country: 'Reino Holanda',
        city: 'Amsterdã',
        flagImage: '/holand-ellipse.svg',
        cityImage: '/amsterda.svg'
    }
]

export default function Europe() {
    return (
        <Flex direction="column" w="100%" maxWidth={1440} mx="auto">
            <Header />

            <Flex backgroundImage='/banner-europa.svg' h={["150px", "500px"]}  backgroundSize="cover" align="flex-end">
                <Heading color="gray.50" ml="140px" mb="60px" fontSize="48px" fontWeight="semibold">
                    Europa
                </Heading>
            </Flex>

            <Stack w="100%" px={["16px", "32px", "140px"]} mt="80px" spacing="70px" direction={["column", "column", "row"]}>
                <Text maxW="600px" fontSize={["14px", "18px", "24px"]} color="gray.700" textAlign="justify" >
                A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                </Text>
                <HStack justify="space-between">
                    <Box>
                        <Heading color="yellow.200" fontSize={["24px", "36px", "48px"]} fontWeight="semibold">50</Heading>
                        <Text color="gray.700" fontSize={["18px", "24px"]} fontWeight={["regular", "semibold"]}>países</Text>
                    </Box>
                    <Box>
                        <Heading color="yellow.200" fontSize={["24px", "36px", "48px"]} fontWeight="semibold">60</Heading>
                        <Text color="gray.700" fontSize={["18px", "24px"]} fontWeight={["regular", "semibold"]}>línguas</Text>
                    </Box>
                    <Box display="flex" alignItems="center" flexDir="column">
                        <Heading color="yellow.200" fontSize={["24px", "36px", "48px"]} fontWeight="semibold">27</Heading>

                        <Flex direction="row" gap="6px">
                            <Text color="gray.700" fontSize={["18px", "24px"]} fontWeight={["regular", "semibold"]} whiteSpace="nowrap">
                                cidades +100
                            
                            </Text>

                            <Tooltip label="Informações">
                                <Image src='/Info.svg' />
                            </Tooltip>
                        </Flex>
                    </Box>
                </HStack>
            </Stack>

            <Heading mt={["32px", "48px", "80px"]} mb={["20px", "40px"]} ml={["16px", "32px", "140px"]}>
                Cidades +100
            </Heading>

            <SimpleGrid minChildWidth="256px" mx={["16px", "32px", "140px"]} spacing={[20, 45]}>

                {countryInfo.map(country => {
                    return (
                        <Flex direction="column" maxWidth="256px" bg="white" mx="auto" >
                            <Image src={country.cityImage} />

                            <HStack pt="18px" pb="25px" px="24px" justify="space-between">
                                <Flex  gap="12px" direction="column">
                                    <Text fontFamily="Barlow" fontWeight="semibold" fontSize="20px">{country.city}</Text>
                                    <Text fontFamily="Barlow" fontWeight="medium" fontSize="16px">{country.country}</Text>
                                </Flex>

                                <Flex alignItems="center" justify="center">
                                    <Image src={country.flagImage} />
                                </Flex>
                            </HStack>
                        </Flex>
                    )
                })}

            </SimpleGrid>


        </Flex>
    )
}