import Header from "./components/header/Header";
import Searchbar from "./components/searchbar/Searchbar";
import ArticleContainer from "./components/articles/articlecontainer/ArticleContainer";
import { JSX, useState } from "react";
import React from "react";
import { ArticleType } from "./types/ArticleType";
import { ArticleService } from "./services/ArticlesService";

function App(): JSX.Element {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  function getArticles(search: string = ""): void {
    const res = ArticleService.getArticles(search);
    setArticles(res);
  }

  return (
    <>
      <Header></Header>
      <Searchbar onSearch={getArticles}></Searchbar>
      <ArticleContainer articles={articles}></ArticleContainer>
    </>
  );
}

export default App;
