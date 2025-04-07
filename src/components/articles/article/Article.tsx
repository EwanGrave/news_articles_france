import React, { JSX } from "react";
import "./Article.css";
import { ArticleType } from "../../../types/ArticleType";

interface ArticleProps {
  article: ArticleType;
}

export default function Article(props: ArticleProps): JSX.Element {
  return <div>{props.article.title}</div>;
}
