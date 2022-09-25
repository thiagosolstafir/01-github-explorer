interface RepositoryItemProps {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryItem(props: RepositoryItemProps) {
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
