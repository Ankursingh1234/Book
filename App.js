import React, { Component } from "react"
import Header from "./App/components/header"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

import Book from "./App/components/Book"
import BookPage from "./App/components/BookPage"
import Routes from "./App/components/Routes"

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: [],
      isLoading: false,
      bookObject: {}
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    fetch("https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a")
      .then(response => response.json())
      .then(response => {
        this.setState({
          isLoading: false,
          books: response.items
        })
      })
  }
  tull(item) {
    this.setState({ bookObject: item })
  }
  render() {
    let content
    if (this.state.isLoading) content = <h1>Loading...</h1>
    else if (this.state.books.length > 0) {
      content = this.state.books.map(b => (
        <Link
          to={{
            pathname: "/books"
          }}
        >
          <a onClick={this.tull.bind(this, b)}>
            <Book key={b.id} book={b} />
          </a>
        </Link>
      ))
    } else {
      content = <h4>No books found!</h4>
    }
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Routes content={content} pp={this.state.bookObject} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
