export function setFilm (film) {
  return {
    type: 'SET_FILM',
    film
  }
}

export function fetchRandomFilm () {
  return function (dispatch) {
    fetch('http://localhost:3000/api/random.json')
      .then(res => res.json())
      .then(film => dispatch(setFilm(film)))
  }
}
