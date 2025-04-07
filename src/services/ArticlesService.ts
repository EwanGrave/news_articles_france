import { ArticlesType } from "../types/ArticleType";

export class ArticleService {
  baseUrl: string = "https://newsapi.org/v2/";
  countryTag: string = "fr";
  domains: string[] = ["lemonde.fr"];

  public static getArticles(search: string = ""): ArticlesType[] {
    return [];
  }
}
