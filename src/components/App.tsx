import axios from "axios";
import SearchForm from "./SearchForm";
import { useState } from "react";
import ArticleList from "./ArticleList";

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
  const [isLoading, setIsLoading] = useState(false);
  // 1. Оголошуємо стан
  const [isError, setIsError] = useState(false);

  const handleSearch = async (topic: string) => {
    // 2. Додаємо блок try...catch
    try {
      setIsLoading(true);
      // 3. Скидаємо стан помилки в false перед кожним запитом
      setIsError(false);
      const response = await axios.get<ArticlesHttpResponse>(
        `https://hn.algolia.com/api/v1/search?query=${topic}`
      );
      setArticles(response.data.hits);
    } catch {
      // 4. Встановлюємо стан isError в true
      setIsError(true);
    } finally {
      // 5. Встановлюємо стан isLoading в false
      // після будь якого результату запиту
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {isLoading && <p>Loading data, please wait...</p>}
      {/* 6. Використовуємо стан isError щоб показати помилку */}
      {isError && <p>Whoops, something went wrong! Please try again!</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}
