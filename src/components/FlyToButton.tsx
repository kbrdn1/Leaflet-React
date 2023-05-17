import { useMap } from 'react-leaflet'
import { LatLng } from 'leaflet'

const FlyToButton = ({lat, lng, title}) => {
    const map = useMap()
    const latNumber = parseFloat(lat);
    const lngNumber = parseFloat(lng);

    if (isNaN(latNumber) || isNaN(lngNumber)) {
        console.error('Invalid latitude or longitude');
        return null;
    }

    const targetLatLng = new LatLng(latNumber, lngNumber);

    return (
        <button
            className="font-semibold bg-white text-black p-2 rounded shadow hover:bg-blue-400 focus:bg-blue-400 ease-out duration-300"
            onClick={() => map.flyTo(targetLatLng, 13)}
        >
            {title}
        </button>
    );
}
  
export default FlyToButton