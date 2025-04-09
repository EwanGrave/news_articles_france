import Header from "./components/header/Header";
import Searchbar from "./components/searchbar/Searchbar";
import ArticleContainer from "./components/articles/articlecontainer/ArticleContainer";
import { JSX, useState } from "react";
import React from "react";
import { ArticleType } from "./types/ArticleType";
import { ArticleService } from "./services/ArticleService";
import Footer from "./components/footer/Footer";
import { Spin } from "antd";
import "./App.css";

function App(): JSX.Element {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  async function getArticles(
    domains: string[],
    search: string = ""
  ): Promise<void> {
    setIsLoading(true);
    setError(undefined);
    try {
      const res = await ArticleService.getArticles(domains, search);
      setArticles(res);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    }
    setIsLoading(false);
  }

  return (
    <>
      <Header></Header>
      <Searchbar onSearch={getArticles}></Searchbar>

      {error && <div className="error">{error}</div>}

      {!isLoading ? (
        <ArticleContainer articles={articles}></ArticleContainer>
      ) : (
        <div className="loading-spin">
          <Spin size="large" />
        </div>
      )}

      <Footer></Footer>
    </>
  );
}

export default App;
