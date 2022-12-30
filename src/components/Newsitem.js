import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title,description,url,urlToImage,author,date}=this.props
    return (
      <div>
        <div className="card">
           <img src={urlToImage} className="card-img-top" alt="..."/>
           <div className="card-body">
           <h5 className="card-title">{title}</h5>
           <p className="card-text">{description}.</p>
           <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toDateString()}</small></p>
           
           <a href={url} className="btn btn-primary">Read More...</a>
           </div>
           </div>
    </div>
    )
  }
}
