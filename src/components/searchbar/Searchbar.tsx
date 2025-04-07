import React, { JSX, useEffect, useState } from "react";
import "./Searchbar.css";
import { Button, Form, Input } from "antd";

interface SearchbarProps {
  onSearch: (search: string) => void;
}

export default function Searchbar(props: SearchbarProps): JSX.Element {
  const [search, setSearch] = useState<string>("");

  function onSubmit(): void {
    props.onSearch(search);
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
