import React, { JSX } from "react";
import "./Article.css";
import { ArticleType } from "../../../types/ArticleType";
import { Card, Tooltip } from "antd";
import Meta from "antd/es/card/Meta";

interface ArticleProps {
  article: ArticleType;
}

export default function Article(props: ArticleProps): JSX.Element {
  function getFormattedDate(): string {
    const date = new Date(props.article.publishedAt);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  }

  return (
    <div className="article">
      <Card
        className="article-card"
        style={{ width: 300 }}
        cover={<img alt="example" src={props.article.urlToImage} />}
      >
        <Meta
          title={
            <Tooltip title={props.article.title} placement="topLeft">
              <a href={props.article.url} target="_BLANK">
                {props.article.title}
              </a>
            </Tooltip>
          }
          description={
            <div className="article-desc">
              <div>
                {props.article.source.name}, le {getFormattedDate()}
              </div>
              <div>{props.article.description}</div>
            </div>
          }
        />
      </Card>
    </div>
  );
}
