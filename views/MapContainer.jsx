import React, { Component } from 'react';
import 'whatwg-fetch';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '50%'
};

export class MapContainer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <Map
                        google={this.props.google}
                        zoom={14}
                        style={mapStyles}
                        initialCenter={{
                            lat: -1.2884,
                            lng: 36.8233
                        }}
                    />
                </footer>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDNivNScRBxJ5a-eKNb82qnfguHLi_x2uc'
})(MapContainer)
