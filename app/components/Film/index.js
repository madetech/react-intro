import React from 'react'

export default class Film extends React.Component {
  render () {
    return (
      <section>
        <img src={this.props.imageURL} alt={this.props.title} />
        <h2>{this.props.title}</h2>
      </section>
    )
  }
}
