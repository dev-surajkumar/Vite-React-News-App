import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";


const NewsBoard = ({category}) => {
    const [articles, setArticles]=useState([]);
    useEffect(()=>{
        const API_KEY = import.meta.env.VITE_API_KEY;
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

        fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
    }, [category])
  return (
    <div >
      <h2 className="text-center my-2">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news, index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard
