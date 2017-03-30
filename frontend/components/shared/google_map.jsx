import React, { component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

const _mapOptions = {
  center: { lat: 30.3653041, lng: -97.9507103 }, // china pacific
  zoom: 16
};

class GoogleMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, _mapOptions);
    this.marker = new google.maps.Marker({
      position: _mapOptions.center,
      map: this.map,
      animation: google.maps.Animation.BOUNCE,
      title: "China Pacific"
    });
  }

  componentDidUpdate() {
    marker.setMap(this.map);
  }

  render () {
    return (
      <div className="contact-map" ref="map">Map</div>
    )
  }
}

export default withRouter(GoogleMap);
