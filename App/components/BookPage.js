import React, { useState } from "react"
import { Redirect } from "react-router-dom"

function BookPage(props) {
  const [pos, setPos] = useState("/")
  if (props == null || props.book.id == null) {
    return <Redirect to={pos} />
  }
  return (
    <div className="container book">
      <div className="row details">
        <div className="col-md-4">
          <img src={props.book.volumeInfo.imageLinks.thumbnail} />
        </div>
        <div className="col-md-8">
          <div>
            <h3>{props.book.volumeInfo.title}</h3>
          </div>
          <div className="float-right dd">
            <p>Published Date:{props.book.volumeInfo.publishedDate}</p>
            <p>Author Name {props.book.volumeInfo.authors[0]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookPage
