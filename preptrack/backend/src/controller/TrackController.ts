import { TrackService } from "../service/TrackService";
import { Request, Response } from "express";
const trackService = new TrackService();

export const createTrack = async (request: Request, response: Response) => {
  try {
    const track = await trackService.create(request.body);
    response.status(200).json({ track: track });
  } catch (error) {
    response.status(500).json({ error: error });
  }
};
