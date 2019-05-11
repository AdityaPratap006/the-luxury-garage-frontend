import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css';
const AnyReactComponent = ({ text }) => <div className='pin '> </div>;
 
class SimpleMap extends Component {
  
 
  render() {

    const latitude = this.props.center.lat;
    const longitude =  this.props.center.lng;
    const text = this.props.text;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'YOUR GOOGLE MAPS API KEY'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={latitude}
            lng={longitude}
            text={text}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
