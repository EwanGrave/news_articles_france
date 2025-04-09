import React, { JSX, useState } from "react";
import "./Searchbar.css";
import { Button, Form, Input, Select } from "antd";

interface SearchbarProps {
  onSearch: (domains: string[], search: string) => void;
}

interface SelectOptionType {
  label: string;
  value: string;
}

export default function Searchbar(props: SearchbarProps): JSX.Element {
  const [search, setSearch] = useState<string>("");
  const [domains, setDomains] = useState<string[]>([]);

  const selectOptions: SelectOptionType[] = [
    {
      label: "Le Monde",
      value: "lemonde.fr",
    },
    {
      label: "Libération",
      value: "liberation.fr",
    },
  ];

  function onSubmit(): void {
    props.onSearch(domains, search);
  }

  function handleSearch(event: React.FormEvent<HTMLInputElement>): void {
    setSearch(event.currentTarget.value);
  }

  function handleDomains(value: string[]): void {
    setDomains(value);
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

        <Form.Item
          name="domains"
          rules={[
            { required: true, message: "Sélectionnez au moins une source" },
          ]}
        >
          <Select
            mode="multiple"
            allowClear
            placeholder="Sources"
            onChange={handleDomains}
            options={selectOptions}
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
