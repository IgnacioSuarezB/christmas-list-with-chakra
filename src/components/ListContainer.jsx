import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import GiftList from "./GiftList";

const ListContainer = () => {
  return (
    <Box
      color="white"
      bg="rgba(17, 11, 11, 0.8)"
      boxShadow="dark-lg"
      p="6"
      rounded="xl"
    >
      <Heading as="h1" size="2xl" color="yellow.600" pb="8">
        Regalos de navidad
      </Heading>
      <GiftList />
      Pasar todo a distintos componentes
      <InputGroup>
        <InputLeftAddon children="Regalo:" bg="red" />
        <Input type="tel" placeholder="Agrege un nuevo regalo" />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon children="https://" bg="red" />
        <Input placeholder="Imagen" />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon children="Cantidad" bg="red" />
        <NumberInput step={1} defaultValue={0} min={0}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </InputGroup>
    </Box>
  );
};

export default ListContainer;
