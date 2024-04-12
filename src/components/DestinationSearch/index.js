import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchedFor: ''}

  onSearching = event => {
    this.setState({searchedFor: event.target.value})
  }

  render() {
    const {destinationList} = this.props
    const {searchedFor} = this.state
    const searchResults = destinationList.filter(destination =>
      destination.name.toLowerCase().includes(searchedFor.toLowerCase()),
    )
    return (
      <div className="div">
        <div className="page">
          <h1 className="h1">Destination Search</h1>
          <div className="search">
            <input
              type="search"
              onChange={this.onSearching}
              className="search"
              value={searchedFor}
              placeholder="Search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="ul">
            {searchResults.map(destination => (
              <DestinationItem key={destination.id} destination={destination} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
