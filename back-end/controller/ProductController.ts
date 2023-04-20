import express, { Request, Response } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProduct,
  updateProduct,
} from "../services/product-services";
export const productRouter = express.Router();

// find product by id

productRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const product = await getProduct(req.params.id);
    return res.status(200).send(product);
  } catch (err) {
    return res.send({ error: err });
  }
});

// get all products

productRouter.get("/", async (req: Request, res: Response) => {
  try {
    const products = await getAllProduct();
    return res.status(200).send({ products });
  } catch (err) {
    return res.send({ error: err });
  }
});

// create product

productRouter.post("/new", async (req: Request, res: Response) => {
  try {
    const newProduct = createProduct(req.body);
    return res.status(200).send(newProduct);
  } catch (err) {
    return res.send({ error: err });
  }
});

// delete product

productRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const product = await deleteProduct(req.params.id);
    return res.status(200).send(product);
  } catch (err) {
    return res.send({ error: err });
  }
});

// update product

productRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const result = await updateProduct(req.params.id, req.body);
    return res.status(200).send(result);
  } catch (err) {
    return res.send({ error: err });
  }
});
