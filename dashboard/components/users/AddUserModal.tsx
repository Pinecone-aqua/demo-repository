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
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";

interface AddUserModalType {
  title: string;
}

export default function AddUserModal({ title }: AddUserModalType) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function submitHandler(e: any) {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      role: e.target.role.value,
    };
    axios
      .post(`http://localhost:2023/user/add`, data)
      .then((res) => console.log(res.data));
  }

  return (
    <>
      <Button onClick={onOpen}>Add User</Button>

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
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Role</FormLabel>
                <Select name="role">
                  <option value="CLIENT">CLIENT</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="MODERATOR">MODERATOR</option>
                </Select>
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
