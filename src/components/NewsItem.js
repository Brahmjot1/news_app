import React from "react";
import "./NewsItem.css";

const NewsItem = (props) => 
{

 const truncateText = (text, maxLength)=> 
  {
    if (!text) return "";
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }

  
    let { title, description, src, newsUrl, author, date } = props;
    
    const maxLength = 70; // Set your desired maximum character limit for both title and description

    let truncatedDescription = truncateText(description, maxLength);

     // Checking if an image source is available, otherwise using a default image
    const imageElement = src ? (
      <img
        src={src}
        className="card-img-top"
        alt={title || "Sample"}
        style={{ height: "50%" }}
      />
    ) : (
      <img
        src="https://demofree.sirv.com/nope-not-here.jpg"
        className="card-img-top"
        alt="sample"
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
            <p className="card-text">{truncatedDescription}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
              rel="noopener noreferrer"
            >
              Read More..
            </a>
          </div>
        </div>
      </div>
    );
  }
  export default NewsItem

