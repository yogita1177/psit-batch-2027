import express from "express";
import {
  createTrack,
  findTrackById,
  findTracks,
} from "../controller/TrackController";

const trackRouter = express.Router();

trackRouter.post("/tracks", createTrack);
trackRouter.get("/tracks", findTracks);
trackRouter.get("/tracks/:id", findTrackById);

export default trackRouter;
