import React from 'react'
import Film from '../../components/Film'
import films from './films.json'

export default class App extends React.Component {
  constructor (...args) {
    super(...args)
    this.state = { index: 0 }
  }

  randomFilm () {
    this.setState({ index: this.state.index + 1 })
  }

  render () {
    return (
      <section>
        <Film
          imageURL={films[this.state.index].Poster}
          title={films[this.state.index].Title}
        />

        <button onClick={::this.randomFilm}>
          New Film
        </button>
      </section>
    )
  }
}
