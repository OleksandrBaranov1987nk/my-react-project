// import SearchForm from "./SearchForm";
// import { useState } from "react";
// // import { Article } from "../types/article";
// import ArticleList from "./ArticleList";
// import { fetchArticles } from "../services/articleService";
// import type { Article } from "../types/article";

// // interface Article {
// //   objectID: string;
// //   title: string;
// //   url: string;
// //   author: string;
// // }

// export default function App() {
//   const [articles, setArticles] = useState<Article[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   const handleSearch = async (topic: string) => {
//     try {
//       setIsLoading(true);
//       setIsError(false);
//       // 2. Використовуємо HTTP-функцію
//       const data = await fetchArticles(topic);
//       setArticles(data);
//     } catch {
//       setIsError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <SearchForm onSubmit={handleSearch} />
//       {isLoading && <p>Loading data, please wait...</p>}
//       {isError && <p>Whoops, something went wrong! Please try again!</p>}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </>
//   );
// }

import Modal from "./Modal";

export default function App() {
  return (
    <div>
      <h1>Main content of the page</h1>
      <Modal />
    </div>
  );
}
