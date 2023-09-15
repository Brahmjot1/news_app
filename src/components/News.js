import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import './News.css';
import Spinner from './Spinner';
export default class News extends Component {

  static defaultProps ={
    country:'in',
    pageSize:8,
    category:'general'

  }

  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category :PropTypes.string
  }

  articlesLocalArray = [];
  
  constructor(props) {
    super(props);
    this.state = 
    {
      articles : this.articlesLocalArray,
      loading:false,
      page:1,
    }
    document.title=`${this.props.category} - News Baazar` 
  }

  async updateNews()
  {
    this.props.setProgress(0)
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading:true});
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData= await data.json();
    this.props.setProgress(50)
    console.log(parsedData);
    this.setState({articles:parsedData.articles,totalArticles:parsedData.totalResults,loading:false})
    this.props.setProgress(100)
  }
  async componentDidMount()
  {
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d9fc5f11916e4bb0a0de474a79ae15c3&page=1&pageSize=${this.props.pageSize}`
    // this.setState({loading:true});
    // let data = await fetch(url); 
    // let parsedData= await data.json();
    // console.log(parsedData);
    // this.setState({articles:parsedData.articles,totalArticles:parsedData.totalResults,loading:false})
    this.updateNews();
    
  }

  previousClickHandler = async()=>{
    console.log("Previous");
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d9fc5f11916e4bb0a0de474a79ae15c3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData= await data.json();
    // console.log(parsedData);
    // this.setState({
    //   articles:parsedData.articles, 
    //   page:this.state.page - 1,
    // loading:false})
    this.setState({page:this.state.page-1})
    this.updateNews();

    }

  
  nextClickHandler = async()=>
  {
  console.log("Next");
 
  // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d9fc5f11916e4bb0a0de474a79ae15c3&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  // this.setState({loading:true});
  // let data = await fetch(url);
  // let parsedData= await data.json();
  // console.log(parsedData);
  // this.setState({
  //   articles:parsedData.articles,
  //   page:this.state.page + 1,
  //   loading:false})
     this.setState({page:this.state.page+1})
     this.updateNews();
  
  }
  
  render() {
 
    return (
      <div>
        
        {this.state.loading===true && <Spinner/>}
        <div className='row'>
          {this.state.loading===false && this.state.articles.map((element)=>{
             return <div className='col-md-4'>
             <NewsItem title={element.title} description={element.description } src={element.urlToImage} key={element.url} newsUrl={element.url} date={element.publishedAt} author={element.author}/>
           </div>
          })}
        </div>

        <div className='container d-flex justify-content-between'>
          <button type='button' className='btn btn-dark' onClick={this.previousClickHandler} disabled={this.state.page<=1}>  &larr; Previous</button>
          <button type='button' className='btn btn-dark' onClick={this.nextClickHandler} disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles/8)} >Next &rarr;</button>
        </div>

      </div>
    );
  }
}
