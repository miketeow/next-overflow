/* eslint-disable check-file/filename-naming-convention */
interface Tag {
  _id: string;
  name: string;
}

interface Author {
  _id: string;
  name: string;
  avatar: string;
}
interface Question {
  _id: string;
  title: string;
  tags: Tag[];
  author: Author;
  createdAt: Date;
  upvotes: number;
  answers: number;
  views: number;
}
