import React, { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositores.scss";

let url = "https://api.github.com/users/thiagosolstafir/repos";

export function RepositoryList() {
  const [repositores, setRepositores] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRepositores(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        {repositores.map((repository) => (
          <RepositoryItem
            key={repository.id}
            description={repository.description}
            name={repository.name}
            html_url={repository.html_url}
          />
        ))}
      </ul>
    </section>
  );
}
