import { TrackService } from "../service/TrackService";
import { Request, Response } from "express";
const trackService = new TrackService();

export const createTrack = async (request: Request, response: Response) => {
  try {
    const track = await trackService.create(request.body);
    response.status(200).json(track);
  } catch (error) {
    response.status(500).json({ error: error });
  }
};

export const findTracks = async (_request: Request, response: Response) => {
  try {
    const tracks = await trackService.findAll();
    response.status(200).json(tracks);
  } catch (error) {
    response.status(500).json({ error: error });
  }
};

export const findTrackById = async (request: Request, response: Response) => {
  const id = request.params.id;
  try {
    const track = await trackService.findById(id!);
    if (track === null) {
      response.status(404).json({
        message: `Track is not found with the given id ${id}`,
      });
      return;
    }
    response.status(200).json(track);
  } catch (error) {
    response.status(500).json({ error: error });
  }
};
