import { Box, Flex, Text, Image, VStack, HStack, Divider, Center, Heading, useBreakpointValue, SimpleGrid, Icon } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { ContinentSlider } from '../components/Slider'

const Home: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true
  });

  return (
    <Flex direction="column" w="100%" maxWidth={1440} mx="auto">
      <Header />
      
      <Flex backgroundImage='/Background.svg' h="335px" justify="space-around">
        <VStack justify="center" align="left" px="16px" >
          <Text fontSize={[20, 36]} fontWeight="medium" color="gray.50" maxWidth={426}>
            5 Continentes, <br />infinitas possibilidades.
          </Text>
            
          <Text fontSize={[14, 20]} color="gray.200" maxWidth={524} >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </VStack>
        { isWideVersion && 
        (
          <VStack mt={76}>
            <Image src='Airplane.svg'  />
          </VStack>
        ) }
      </Flex>

      <SimpleGrid justifyContent="space-between" minChildWidth="158px" mt="24" px={["50px", "140px"]} _last={{
        gridColumn:"span"
      }}>
        <Box align="center" display="flex" flexDirection={['row', 'column']} alignItems="center" mx="auto" >
          { isWideVersion ?
           <Image src='/cocktail 1.svg' />
          :
            <Image src='/Ellipse 7.svg' mr="8px" />
          }
          <Text fontSize={[18, 24]} fontWeight="semibold" >vida noturna</Text>
        </Box>

        <Box align="center" display="flex" flexDirection={['row', 'column']} alignItems="center" mx="auto">
          { isWideVersion ?
             <Image src='/surf 1.svg' />
            :
            <Image src='/Ellipse 7.svg' mr="8px" />
          }
          <Text fontSize={[18, 24]} fontWeight="semibold" >praia</Text>
        </Box>

        <Box align="center" display="flex" flexDirection={['row', 'column']} alignItems="center" mx="auto">
          { isWideVersion ? 
              <Image src='/building 1.svg' />
            :
            <Image src='/Ellipse 7.svg' mr="8px" />
          }
          <Text fontSize={[18, 24]} fontWeight="semibold" >moderno</Text>
        </Box>

        <Box align="center" display="flex" flexDirection={['row', 'column']} alignItems="center" mx="auto">
          { isWideVersion ?
              <Image src='/museum 1.svg' />
            :
            <Image src='/Ellipse 7.svg' mr="8px" />
          }
          <Text fontSize={[18, 24]} fontWeight="semibold" >clássico</Text>
        </Box>

        <Box align="center" display="flex" flexDirection={['row', 'column']} alignItems="center" mx="auto">
          { isWideVersion ?
              <Image src='/earth 1.svg' /> 
            :
            <Image src='/Ellipse 7.svg' mr="8px" />
          }
          <Text fontSize={[18, 24]} fontWeight="semibold" >e mais...</Text>
        </Box>
      </SimpleGrid>

      <Center>
        <Divider w={90} borderColor="gray.700" border={2} mt="80px" />
      </Center>

      <Center>
        <Heading w={839} my="52px" display="flex" justifyContent="center" textAlign="center" color="gray.700" fontWeight="medium" fontSize={[20, 36]} >
          Vamos nessa? <br /> Então escolha seu continente
        </Heading>
      </Center>

      <Center mx="auto" mb="40px" maxWidth="1240px" w="100%" >
        <ContinentSlider />
      </Center>
    </Flex>
  )
}

export default Home
