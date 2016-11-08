const INITIAL_STATE = {
  film: {}
}

export default function films (state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_FILM':
    return { film: action.film }
  default:
    return state
  }
}
