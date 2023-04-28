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

interface EditProductModalType {
  product: any;
  title: string;
  brands: any;
  categories: any;
}

export default function EditProductModal({
  product,
  title,
  brands,
  categories,
}: EditProductModalType) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function submitHandler(e: any) {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      brand: e.target.brand.value,
      category: e.target.category.value,
      image: e.target.image.value,
    };
    axios
      .patch(`http://localhost:2023/product/${product._id}`, data)
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
                <Input type="text" name="name" defaultValue={product.name} />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  name="price"
                  defaultValue={product.price}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Quantity</FormLabel>
                <Input
                  type="number"
                  name="quantity"
                  defaultValue={product.quantity}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Brand</FormLabel>
                <Select name="brand">
                  {brands.map((brand: any) => (
                    <option key={brand._id} value={brand._id}>
                      {brand.name}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Category</FormLabel>
                <Select name="category">
                  {categories.map((category: any) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl mt={5} isRequired>
                <FormLabel>Image URL</FormLabel>
                <Input type="text" name="image" defaultValue={product.image} />
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
