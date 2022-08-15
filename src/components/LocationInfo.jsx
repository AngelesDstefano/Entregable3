import React from 'react'

export const LocationInfo = ({location}) => {

    console.log(location)

  return (
    <article className='card__location'>
        <h2>location Info {location?.name}</h2>
        <ul>
            <li><span className='location'>Type: </span>{location?.type}</li>
            <li><span className='location'>Dimension:  </span>{location?.dimension}</li>
            <li><span className='location'>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
} 
export default LocationInfo