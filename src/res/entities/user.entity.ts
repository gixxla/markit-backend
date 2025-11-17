import { Entity, Column, OneToMany } from "typeorm";
import { CommonEntity } from "./common.entity";
import { Bookmark } from "./bookmark.entity";
import { Category } from "./category.entity";
import { Tag } from "./tag.entity";

@Entity("user")
export class User extends CommonEntity {
  @Column({ type: "uuid", unique: true })
  anonymous_id: string;

  @Column({ type: "varchar", nullable: true, unique: true })
  email: string | null;

  @Column({ type: "varchar", nullable: true })
  password_hash: string | null;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  last_active_at: Date;

  @Column({ type: "boolean", default: false })
  is_registered: boolean;

  @OneToMany(() => Bookmark, (bookmark) => bookmark.user)
  bookmarks: Bookmark[];

  @OneToMany(() => Category, (category) => category.user)
  categories: Category[];

  @OneToMany(() => Tag, (tag) => tag.user)
  tags: Tag[];
}
