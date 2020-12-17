import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  // get state >> this.props


  addTrack = () => {
    console.log('addTrack', this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  }

  findTrack = () => {
    this.props.onFindTrack(this.searchInput.value)
    console.log('findTrack', this.searchInput.value);
  }

  render() {
    //console.log(this.props.tracks)

    return (
      <div>
        <div>
          {/* storing input as trackInput to get trackinput.value */}
          <input type="text" ref={input => {this.trackInput = input}} />
          {/* firing dispatch on click */}
          <button onClick={this.addTrack}>Add Track</button>
        </div>
        <div>
          <input type="text" ref={input => {this.searchInput = input}} />
          <button onClick={this.findTrack}>Find track</button>
        </div>
        <ul>
          {this.props.tracks.map((track, index ) =>
          <li key={index}>{track.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
  }),
  // dispatch
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      }
      dispatch({ type: 'ADD_TRACK', payload });
    },
    onFindTrack: (name) => {
      dispatch({ type: 'FIND_TRACK', payload: name })
    }
  })
)(App);