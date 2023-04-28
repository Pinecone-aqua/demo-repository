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

interface EditBrandModalType {
  category: any;
  title: string;
}

export default function EditCategoryModal({
  category,
  title,
}: EditBrandModalType) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function submitHandler(e: any) {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      image: e.target.image.value,
    };
    axios
      .patch(`http://localhost:2023/brand/${category._id}`, data)
      .then((res) => console.log(res.data));
  }

  return (
    <>
      <div className="cursor-pointer text-blue-500" onClick={onOpen}>
        Edit
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={submitHandler}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name" defaultValue={category.name} />
              </FormControl>

              <FormControl mt={5} isRequired>
                <FormLabel>Image URL</FormLabel>
                <Input type="text" name="image" defaultValue={category.image} />
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
