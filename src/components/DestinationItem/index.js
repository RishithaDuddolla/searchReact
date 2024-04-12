import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {destination} = this.props
    const {name, url} = destination
    return (
      <li className="li">
        <img src={url} className="img" alt={name} />
        <h1 className="h1">{name}</h1>
      </li>
    )
  }
}

export default DestinationItem
