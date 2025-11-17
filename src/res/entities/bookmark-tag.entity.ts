import { Entity, PrimaryColumn, ManyToOne } from "typeorm";
import { Bookmark } from "./bookmark.entity";
import { Tag } from "./tag.entity";

@Entity("bookmark_tag")
export class BookmarkTag {
  @PrimaryColumn()
  bookmark_id: number;

  @PrimaryColumn()
  tag_id: number;

  @ManyToOne(() => Bookmark, (bookmark) => bookmark.bookmarkTags)
  bookmark: Bookmark;

  @ManyToOne(() => Tag, (tag) => tag.bookmarkTags)
  tag: Tag;
}
