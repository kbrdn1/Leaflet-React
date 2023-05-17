import L from 'leaflet'
import { Marker } from 'react-leaflet'
import marker from '@assets/Marker.png'

const icon = L.icon({
  iconUrl: marker,
  iconSize: [25, 25],
  iconAnchor: [12.5, 12.5],
})

const SelfMarker = ({lat, lng}) => {
    
    return (
        <Marker position={{ lat:lat, lng: lng }} icon={icon} />
    );
};

export default SelfMarker;