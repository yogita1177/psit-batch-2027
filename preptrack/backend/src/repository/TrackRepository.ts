import { Repository } from "typeorm";
import { Track } from "../model/Track";
import { PostgresDataSource } from "../config/Database";

export class TrackRepository {
  private repository: Repository<Track>;

  constructor() {
    this.repository = PostgresDataSource.getRepository(Track);
  }

  async createAndSave(track: Track): Promise<Track> {
    const createdTrack = this.repository.create(track);
    return this.repository.save(createdTrack);
  }
}
