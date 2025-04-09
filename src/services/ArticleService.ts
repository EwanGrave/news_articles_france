import axios from "axios";
import { ArticlesRequestType, ArticleType } from "../types/ArticleType";

export class ArticleService {
  static baseUrl: string = "https://newsapi.org/v2/";
  static countryTag: string = "fr";

  public static async getArticles(
    domains: string[],
    search: string = ""
  ): Promise<ArticleType[]> {
    const key = import.meta.env.VITE_API_KEY;
    let fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - 1);
    const stringFromDate = fromDate.toISOString().split("T")[0];

    let domainsToString = "";
    domains.forEach((element) => {
      domainsToString += `${element},`;
    });

    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/${ArticleService.baseUrl}everything?apiKey=${key}&language=${ArticleService.countryTag}&q=${search}&from=${stringFromDate}&domains=${domainsToString}`,
      {
        headers: {
          "access-control-allow-origin": "*",
        },
      }
    );

    const data: ArticlesRequestType = res.data;
    return data.articles;
  }
}
