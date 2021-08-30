import React, { FC, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

interface CompanyMarkerProps { 
  text: string;
  lat: number;
  lng: number;
 }
const CompanyMarker: FC<CompanyMarkerProps> = ({ text }) => <div>{text}</div>;

interface MapProps {
  name: string;
  country: string;
  address: string;
  state: string;
}

const Map: FC<MapProps> = ({ name, country, address, state }) => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  useEffect(() => {
      //GET company lat/lng by search using name, country, address, state 
  }, [])

  return (
    <div style={{ height: '164px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCgjEhbQ3Gi_1dEwn4ilkrSfYSY42HhaSI' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <CompanyMarker lat={59.955413} lng={30.337844} text={name} />
      </GoogleMapReact>
    </div>
  );
};
export default Map;
