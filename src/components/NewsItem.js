import React, { Component } from "react";
import "./NewsItem.css";

export default class NewsItem extends Component {

  truncateText(text, maxLength) {
    if (!text) return "";
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }

  render() {
    const { title, description, src, newsUrl,author,date} =this.props;
    const maxLength = 70; // Set your desired maximum character limit for both title and description

    const truncatedTitle = this.truncateText(title, maxLength);
    const truncatedDescription = this.truncateText(description, maxLength);
    const fallbackImageUrl = "https://demofree.sirv.com/nope-not-here.jpg";
    const imageUrl = src || fallbackImageUrl;
    const imageElement = src ? (
      <img
        src={src}
        className="card-img-top"
        alt="Sample"
        style={{ height: "50%" }}
      />
    ) : (
      <img
        src="https://demofree.sirv.com/nope-not-here.jpg"
        className="card-img-top"
        style={{ height: "50%" }}
      />
    );
  
    return (
      <div>
        <div className="card" style={{ width: "18rem", height: "100%" }}>
          {imageElement}
          <div
            className="card-body d-flex flex-column"
            style={{ height: "50%" }}
          >
            <h5 className="card-title">{truncatedTitle} </h5>
            <p className="card-text">{truncatedDescription}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
              
            >
              Read More..
            </a>
          </div>
        </div>
      </div>
    );
    
  }
}

