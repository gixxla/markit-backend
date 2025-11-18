import { CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export default class CommonEntity {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;
}
