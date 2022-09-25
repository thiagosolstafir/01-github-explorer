import React from "react";

export function RepositoryItem(props) {
  return (
    <>
      <li>
        <strong>{props.name ?? "Default"}</strong>
        <p>{props.description}</p>

        <a href={props.html_url} target="_blank">
          Acessar repositorio
        </a>
      </li>
    </>
  );
}
