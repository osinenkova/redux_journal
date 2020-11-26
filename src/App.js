import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  // get state >> THIS.PROPS.TESTOSTORE


  // method
  addTrack = () => {
    console.log('addTrack', this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  }

  render() {
    //console.log(this.props.tracks)

    return (
      <div>
        {/* storing input as trackInput to get trackinput.value */}
        <input type="text" ref={input => {this.trackInput = input}} />
        {/* firing dispatch on click */}
        <button onClick={this.addTrack}>Add Track</button>
        <ul>
          {this.props.tracks.map((track, index ) =>
          <li key={index}>{track}</li>)}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    tracks: state.tracks
  }),
  // dispatch
  dispatch => ({
    onAddTrack: (trackName) => {
      dispatch({ type: 'ADD_TRACK', payload: trackName });
    }
  })
)(App);