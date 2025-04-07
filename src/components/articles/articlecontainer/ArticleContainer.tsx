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
    <>
      {props.articles.length === 0 ? (
        <div className="no-article-text">
          <span>Lancez la recherche pour voir les articles.</span>
        </div>
      ) : (
        <div className="content">
          <span>{props.articles.length} résultat(s).</span>
          <div className="article-container">
            {props.articles.map((article, index) => (
              <Article key={index} article={article}></Article>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
