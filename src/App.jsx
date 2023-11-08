import {
    flex,
    box, 
    center, 
    FormControl,
    Input,
    FormLabel,
    HStack,
    RadioGroup, 
    Radio, 
    Button,
    Center,
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
                fontSize="4x1"
                pb="8"
                >
                Formulário
            </Center>
        </Box>
    );
}

export default App;
