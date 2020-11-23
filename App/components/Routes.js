import React from "react"
import { Route } from "react-router-dom"
import BookPage from "./BookPage"

function Routes(props) {
  return (
    <>
      <Route path="/books">
        <BookPage className="bookCard container" book={props.pp} />
      </Route>
      <Route exact={true} path="/" render={() => props.content} />
    </>
  )
}
export default Routes
