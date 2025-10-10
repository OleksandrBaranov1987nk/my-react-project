import axios from "axios";
import SearchForm from "./SearchForm";

interface Article {
  objectID: string;
  title: string;
  url: string;
}

interface ArticlesHttpResponse {
  hits: Article[];
}
import { useState } from "react";

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  // 1. Додаємо стан індикатора завантаження
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (topic: string) => {
    // 2. змінюємо індикатор на true перед запитом
    setIsLoading(true);
    const response = await axios.get<ArticlesHttpResponse>(
      `https://hn.algolia.com/api/v1/search?query=${topic}`
    );
    // 3. Змінюємо індикатор на false після запиту
    setIsLoading(false);
    setArticles(response.data.hits);
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {/* 4. Відображаєм повідомлення про завантаження даних в JSX */}
      {isLoading && <p>Loading data, please wait...</p>}
      {articles.length > 0 && (
        <ul>
          {articles.map((article) => (
            <li key={article.objectID}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
