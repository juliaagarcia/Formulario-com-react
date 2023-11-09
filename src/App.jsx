import {
  Flex,
  Box, 
  Center, 
  FormControl,
  Input,
  FormLabel, 
  HStack,
  RadioGroup,
  Radio, 
  Button,
} from "@chakra-ui/react";

function App() {
  return (
    <Box h="100vh">
      <Center 
      as="header"
      h={150}
      bg="teal.500"
      color="white"
      fontWeight="bold"
      fontSize="4xl"
      pb="8"
      >
        Formulário
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 150px)"
        >
        <Center
        w="100%"
        maxW={840}
        background="white"
        top={100} 
        position="absolute"
        borderRadius={5}
        p="6"
        boxShadow="0 1px 2px #ccc"
        >
        <FormControl display="flex" flexDir="column" gap="4">
          <HStack spacing="4">
            <Box w="100%">
              <FormLabel htmlFor="name">Nome Completo</FormLabel>
              <Input id="nome"/>
            </Box>
            <Box w="100%">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" required />
            </Box>
           </HStack>
           <HStack spacing="4">
            <Box w="100%">
              <FormLabel htmlFor="nasc">Data de nascimento</FormLabel>
              <Input id="nasc" type="date" />
            </Box>
            <Box w="100%">
              <FormLabel htmlFor="natural">Naturalidade</FormLabel>
              <Input id="natural" />
            </Box>
            </HStack>

          <HStack spacing="4">
          <Box w="100%">
              <FormLabel htmlFor="cel">Celular</FormLabel>
              <Input id="cel" type="number" required/>
            </Box>
            <Box w="100%">
              <FormLabel htmlFor="Telefone">Telefone</FormLabel>
              <Input id="telefone" type="number" required/>
            </Box>
          </HStack>
          <HStack spacing="4">
          <Box w="100%">
              <FormLabel htmlFor="endereço">Endereço</FormLabel>
              <Input id="endereço"/>
            </Box>
            <Box w="100%">
              <FormLabel htmlFor="cidade">Cidade</FormLabel>
              <Input id="cidade"/>
            </Box>
          </HStack>

          <HStack spacing="4">
          <Box w="100%">
              <FormLabel>Sexo</FormLabel>
              <RadioGroup defaultValue="Masculino">
                <HStack spacing="24px">
                  <Radio value="Masculino">Masculino</Radio>
                  <Radio value="Feminino">Feminino</Radio>
                  <Radio value="Outra">Outro</Radio>
                </HStack>
              </RadioGroup>
          </Box>
          </HStack>
          <HStack justify="center">
            <Button
            w={240}
            p="6"
            type="submit"
            bg="teal.600"
            color="white"
            fontWeight="bold"
            fontSize="x1"
            mt="2"
            _hover={{bg: "teal.800"}}
            >
              Enviar
            </Button>
          </HStack>

          
        </FormControl>
        </Center>
        </Flex>
    </Box>
  )
}

export default App
