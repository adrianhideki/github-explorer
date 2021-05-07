import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

interface Repository {
  name: string;
  id: string;
  html_url: string;
  description: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((resp) => resp.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repo) => {
          return <RepositoryItem repository={repo} key={repo.id} />
        })}
      </ul>
    </section>
  );
}
