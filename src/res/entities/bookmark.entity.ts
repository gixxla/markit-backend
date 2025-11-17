import { Entity, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { CommonEntity } from "./common.entity";
import { User } from "./user.entity";
import { Category } from "./category.entity";
import { BookmarkTag } from "./bookmark-tag.entity";
import { OfflineBookmark } from "./offline-bookmark.entity";

@Entity("bookmark")
export class Bookmark extends CommonEntity {
  @ManyToOne(() => User, (user) => user.tags)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  user_id: number;

  @Column({ type: "text" })
  url: string;

  @Column({ type: "text" })
  title: string;

  @ManyToOne(() => Category, (category) => category.bookmarks, { nullable: true })
  @JoinColumn({ name: "category_id" })
  category: Category;

  @Column({ nullable: true })
  category_id: number;

  @Column({ type: "boolean", default: true })
  is_read_later: boolean;

  @Column({ type: "boolean", default: false })
  is_offline_available: boolean;

  @OneToMany(() => BookmarkTag, (bookmarkTag) => bookmarkTag.bookmark)
  bookmarkTags: BookmarkTag[];

  @OneToOne(() => OfflineBookmark, (offline) => offline.bookmark)
  offlineBookmark: OfflineBookmark;

  @Column({ type: "timestamp", nullable: true })
  last_accessed_at: Date;
}
