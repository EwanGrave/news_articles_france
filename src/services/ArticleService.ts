import axios from "axios";
import { ArticlesRequestType, ArticleType } from "../types/ArticleType";

export class ArticleService {
  static baseUrl: string = "https://newsapi.org/v2/";
  static countryTag: string = "fr";
  static domains: string[] = ["lemonde.fr"];

  public static async getArticles(search: string = ""): Promise<ArticleType[]> {
    const key = import.meta.env.VITE_API_KEY;
    let fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - 1);
    const stringFromDate = fromDate.toISOString().split("T")[0];

    let domains = "";
    ArticleService.domains.forEach((element) => {
      domains += `${element},`;
    });

    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/${ArticleService.baseUrl}everything?apiKey=${key}&language=${ArticleService.countryTag}&q=${search}&from=${stringFromDate}&domains=${domains}`,
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
