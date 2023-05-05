import { MapContainer, TileLayer, useMap } from 'react-leaflet'

const Test = () => {

  return (
    <>
      <MapContainer center={[49.1101713, 6.1864303]} zoom={13} scrollWheelZoom={true} className='w-full h-screen'>
        <TileLayer
          url="https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=ehqmTP6nbNtgoqEAoSF2mfbA6h2eFkmSbF0S6A9KvEDVKUYFF91AoV6KQd2TdJo4"
        />
      </MapContainer>
    </>
  )
}
export default Test