import express, { Request, Response } from "express";
import Movie from "../model/Movie";
const movieRouter = express.Router();

movieRouter.get("/movie/:id", async (req: Request, res: Response) => {
  // console.log("getting movie...");
  console.log(req.params.id);

  const movie = await Movie.findOne({ _id: req.params.id }).limit(1);
  // console.log("found: ", movie);
  return res.status(200).send(movie);
});
movieRouter.get("/movies", async (req: Request, res: Response) => {
  const movie = await Movie.find({ poster: { $exists: true } })
    .limit(10)
    .select({ title: 1, _id: 1, poster: 1 });
  // console.log("found: ", movie);
  return res.status(200).send(movie);
});
movieRouter.get("/movies-ids", async (req: Request, res: Response) => {
  const movie = await Movie.find({ poster: { $exists: true } }).select({
    _id: 1,
  });
  return res.status(200).send(movie);
});

export default movieRouter;
