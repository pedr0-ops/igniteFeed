export interface Author {
  name: string;
  avatarUrl: string;
  role: string;
}

export enum contentEnum {
  PARAGRAPH = "paragraph",
  LINK = "link",
}

export type ContentType = contentEnum.PARAGRAPH | contentEnum.LINK;

export interface Content {
  type: ContentType;
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
}
