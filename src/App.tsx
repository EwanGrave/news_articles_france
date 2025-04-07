import Header from "./components/header/Header";
import Searchbar from "./components/searchbar/Searchbar";
import ArticleContainer from "./components/articles/articlecontainer/ArticleContainer";
import { JSX, useState } from "react";
import React from "react";
import { ArticleType } from "./types/ArticleType";
import { ArticleService } from "./services/ArticleService";
import Footer from "./components/footer/Footer";

function App(): JSX.Element {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  async function getArticles(search: string = ""): Promise<void> {
    const res = await ArticleService.getArticles(search);
    setArticles(res);
  }

  return (
    <>
      <Header></Header>
      <Searchbar onSearch={getArticles}></Searchbar>
      <ArticleContainer articles={articles}></ArticleContainer>
      <Footer></Footer>
    </>
  );
}

export default App;
