import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import "./News.css";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

  //useState 
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // Function to update news based on API call
  const updateNews = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page}&pageSize=${props.pageSize}`;
    // setState({ loading: true });
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(50);
    // console.log(parsedData);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);


  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(50);
    // console.log(parsedData);

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(true);
    props.setProgress(100);
    
    //  console.log(articles.length)
    //  console.log(totalResults)
  };

  return (
    <div>
      <center>
        <h2>NEWS BAAZAR - TOP {props.category.toUpperCase()} HEADLINES</h2>
      </center>

      {/* Displaying news articles */}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults + 8}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles &&
              articles.map((element) => {
                return (
                  <div className="col-md-4">
                    {/* Render NewsItem component for each article */}
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      src={element.urlToImage}
                      key={element.url}
                      newsUrl={element.url}
                      date={element.publishedAt}
                      author={element.author}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

// Default props for the component
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

// Prop types validation for the component

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
