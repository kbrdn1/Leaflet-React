import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import FlyToButton from '@components/FlyToButton'
import city from '@constants/City'
import SelfMarker from '@components/SelfMarker'

const Map = () => {
  const [coords, setCoords] = useState({ lat: 0, lng: 0 })
  
  //get user location
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({ lat: position.coords.latitude, lng: position.coords.longitude })
    })
  }

  // useEffect(() => {
  //   getLocation()
  // }, [coords])

  return (
    <>
      <MapContainer center={{ lat: 49.1101713, lng: 6.1864303 }} zoom={13} scrollWheelZoom={true} className='relative w-full h-screen'>
        <div className='absolute top-0 right-0 bg-[#FFFFFF99] p-4 h-screen border-l-2'>
          <div className='flex flex-col gap-2'>
            <p className='text-md font-semibold w-full text-center text-[1rem]  text-white py-1 rounded-md bg-blue-400'>City</p>
          {city.map((place, index) => (
            <FlyToButton key={index} lat={place.lat} lng={place.lng} title={place.title} />
          ))}
          </div>
          <div className='absolute bottom-3'>
            {coords.lat + ' / ' + coords.lng}
          </div>
        </div>
        <TileLayer
          url="https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=ehqmTP6nbNtgoqEAoSF2mfbA6h2eFkmSbF0S6A9KvEDVKUYFF91AoV6KQd2TdJo4"
        />
        <SelfMarker lat={coords.lat} lng={coords.lng} />
        <Marker position={{lat: 49.35753683718607, lng: 6.168509734453367 }}/>
      </MapContainer>
    </>
  )
}
export default Map