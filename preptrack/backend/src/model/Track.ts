import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity({ name: "tracks" })
export class Track {
  @PrimaryGeneratedColumn("uuid")
  id!: number;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "varchar" })
  description!: string;

  @Column({ type: "varchar" })
  slug!: string;

  @Column()
  isActive?: boolean;

  @Column()
  isNew?: boolean;

  @CreateDateColumn()
  createdAt!: Date;
}
