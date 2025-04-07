import React, { JSX, useEffect, useState } from "react";
import "./Searchbar.css";
import { Button, Form, Input } from "antd";

export default function Searchbar(): JSX.Element {
  const [search, setSearch] = useState<string>();

  useEffect(() => {}, [search]);

  function onSubmit(): void {
    console.log(search);
  }

  function handleSearch(event: React.FormEvent<HTMLInputElement>): void {
    setSearch(event.currentTarget.value);
  }

  return (
    <div className="search-bar">
      <Form className="search-bar-form" onFinish={onSubmit}>
        <Form.Item name="search" rules={[{ required: false }]}>
          <Input
            placeholder="Rechercher un article..."
            onChange={handleSearch}
          />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Chercher
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
