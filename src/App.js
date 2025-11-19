import NewsItem from "./components/NewsItem";
import "./App.css";

function App() {
  const newsItem = {
    title: `Some news`,
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  };

  return <NewsItem news={newsItem} />;
}

export default App;
