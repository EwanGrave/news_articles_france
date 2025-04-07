import React, { JSX } from "react";
import "./Article.css";
import { ArticleType } from "../../../types/ArticleType";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

interface ArticleProps {
  article: ArticleType;
}

export default function Article(props: ArticleProps): JSX.Element {
  return (
    <div className="article">
      <Card
        className="article-card"
        style={{ width: 300 }}
        cover={<img alt="example" src={props.article.urlToImage} />}
      >
        <Meta
          title={
            <a href={props.article.url} target="_BLANK">
              {props.article.title}
            </a>
          }
          description={props.article.description}
        />
      </Card>
    </div>
  );
}
