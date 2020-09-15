import React, { Component } from 'react'
import Card from './components/Card'

class App extends Component {

  state = {
    title: '',
    poster: '',
    plot: '',
    movies: []
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleAddMovie= event => {
    event.preventDefault()
    let movies = JSON.parse(JSON.stringify(this.state.movies))
    movies.push({
      title: this.state.title,
      poster: this.state.poster,
      plot: this.state.plot
    })
    this.setState({movies, title:'', poster:'', plot:''})

  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange} />
          <label htmlFor="poster">poster</label>
          <input
            type="text"
            name="poster"
            value={this.state.poster}
            onChange={this.handleInputChange} />
          <label htmlFor="plot">plot</label>
          <input
            type="text"
            name="plot"
            value={this.state.plot}
            onChange={this.handleInputChange} />
          <button onClick={this.handleAddMovie}>Add Movie</button>
        </form>

        <div className="container">
          <div className="row">
            {
              this.state.movies.map(movie => <Card movie={movie} />)
            }
          </div>
        </div>
      </>
    )
  }

}