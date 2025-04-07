import React, { JSX } from "react";
import "./ArticleContainer.css";
import { ArticleType } from "../../../types/ArticleType";
import Article from "../article/Article";

interface ArticleContainerProps {
  articles: ArticleType[];
}

export default function ArticleContainer(
  props: ArticleContainerProps
): JSX.Element {
  return (
    <div className="article-container">
      {props.articles.map((article, index) => (
        <Article key={index} article={article}></Article>
      ))}
    </div>
  );
}
