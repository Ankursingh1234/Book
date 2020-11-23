import React, { useEffect } from "react"

function Books(props) {
  return (
    <div className="book container">
      <div className="bboki row">
        <div className="col-md-4">
          <img src={props.book.volumeInfo.imageLinks.smallThumbnail} />
        </div>
        <div className="col-md-8">
          <h3>{props.book.volumeInfo.title}</h3>
        </div>
      </div>
    </div>
  )
}

export default Books
