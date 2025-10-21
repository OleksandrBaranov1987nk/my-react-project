import axios from "axios";
import SearchForm from "./SearchForm";
import { useState } from "react";

interface Article {
  objectID: string;
  title: string;
  url: string;
  author: string;
}

interface ArticlesHttpResponse {
  hits: Article[];
}

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);

  const handleSearch = async (topic: string) => {
    const response = await axios.get<ArticlesHttpResponse>(
      `https://hn.algolia.com/api/v1/search?query=${topic}`
    );
    setArticles(response.data.hits);
  };
  console.log(articles);

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {articles.length > 0 && (
        <ul>
          {articles.map(({ objectID, url, title, author }) => (
            <li key={objectID}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
                {author ? ` — ${author}` : ""}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
