export type ArticlesRequestType = {
  status: string;
  totalResults: number;
  articles: ArticlesType[];
};

export type ArticlesType = {
  source: SourceType;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type SourceType = {
  id: string;
  name: string;
};
