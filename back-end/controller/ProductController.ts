import express, { Request, Response } from "express";
import Product from "../model/Product";
export const productRouter = express.Router();

//find product by id
productRouter.get("/:id", async (req: Request, res: Response) => {
  console.log(req.params.id);

  const product = await Product.findOne({ _id: req.params.id }).limit(1);
  return res.status(200).send(product);
});

//get all products
productRouter.get("/all", async (req: Request, res: Response) => {
  const product = await Product.find({ poster: { $exists: true } })
    .limit(10)
    .select({ title: 1, _id: 1, poster: 1 });
  return res.status(200).send(product);
});

//get all product's ids
productRouter.get("/ids", async (req: Request, res: Response) => {
  const product = await Product.find({ poster: { $exists: true } }).select({
    _id: 1,
  });
  return res.status(200).send(product);
});
