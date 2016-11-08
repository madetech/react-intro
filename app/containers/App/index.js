import React from 'react'
import { connect } from 'react-redux'
import Film from '../../components/Film'
import films from './films.json'
import { fetchRandomFilm } from '../../actions/films'

@connect(state => ({ films: state.films }))
export default class App extends React.Component {
  getRandomFilm () {
    this.props.dispatch(fetchRandomFilm())
  }

  render () {
    return (
      <section>
        <Film
          imageURL={this.props.films.film.Poster}
          title={this.props.films.film.Title}
        />

        <button onClick={::this.getRandomFilm}>
          New Film
        </button>
      </section>
    )
  }
}
