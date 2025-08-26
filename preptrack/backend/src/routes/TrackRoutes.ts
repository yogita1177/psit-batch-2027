import express from "express";
import { createTrack } from "../controller/TrackController";

const trackRouter = express.Router();

trackRouter.post("/tracks", createTrack);

export default trackRouter;
