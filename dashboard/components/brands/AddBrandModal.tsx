import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";

interface AddBrandModalType {
  title: string;
}

export default function AddBrandModal({ title }: AddBrandModalType) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function submitHandler(e: any) {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      image: e.target.image.value,
    };
    axios
      .post("http://localhost:2023/brand/add", data)
      .then((res) => console.log(res.data));
  }

  return (
    <>
      <Button onClick={onOpen}>Add Brand</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={submitHandler}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name" />
              </FormControl>

              <FormControl mt={5} isRequired>
                <FormLabel>Image URL</FormLabel>
                <Input type="text" name="image" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose} type="submit">
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}
