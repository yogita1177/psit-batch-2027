import { Track } from "../model/Track";
import { TrackRepository } from "../repository/TrackRepository";

export class TrackService {
  private trackRepository: TrackRepository;

  constructor() {
    this.trackRepository = new TrackRepository();
  }

  async create(track: Partial<Track>): Promise<Track> {
    return this.trackRepository.createAndSave(track);
  }

  async findAll(): Promise<Track[]> {
    return this.trackRepository.findAll();
  }

  async findById(id: string): Promise<Track | null> {
    return this.trackRepository.findById(id);
  }
}
