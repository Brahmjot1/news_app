import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {

  articlesLocalArray = [];
  
  constructor() {
    super();
    this.state = 
    {
      articles : this.articlesLocalArray,
      loading:false,
      page:1
    }
  }

  async componentDidMount()
  {
    console.log("cdm");
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=d9fc5f11916e4bb0a0de474a79ae15c3"
    let data = await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
  }

  previousClickHandler = async()=>{
    console.log("Previous");
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=d9fc5f11916e4bb0a0de474a79ae15c3&page=${this.state.page-1}`;
    let data = await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles})

    this.state = 
    {
      articles : this.articlesLocalArray,
      page:this.state.page-1
    }

  }

  
  nextClickHandler = async()=>
  {
  console.log("Next");

  console.log("Previous");
  let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=d9fc5f11916e4bb0a0de474a79ae15c3&page=${this.state.page+1}`;
  let data = await fetch(url);
  let parsedData= await data.json();
  console.log(parsedData);
  this.setState({articles:parsedData.articles})

  this.state = 
  {
    articles : this.articlesLocalArray,
    page:this.state.page+1
  }
  }

  render() {
    console.log(this.render);
    return (
      <div>
        <div className='row'>
          {this.state.articles.map((element)=>{
             return <div className='col-md-3'>
             <NewsItem title={element.title} description={element.description } src={element.urlToImage} key={element.url} newsUrl={element.url} />
           </div>
          })}
        </div>

        <div className='container d-flex justify-content-between'>
          <button type='button' className='btn btn-dark' onClick={this.previousClickHandler} >  &larr; Previous</button>
          <button type='button' className='btn btn-dark' onClick={this.nextClickHandler} >Next &rarr;</button>
        </div>

      </div>
    );
  }
}
