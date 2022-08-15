import React from 'react'
import useFerch from '../hooks/useFerch'

const CardResident = ({url}) => {
    
 const resident = useFerch(url)

 console.log(resident)

  return (
    <article className='card__resident'>
      <header>
        <img src={resident?.image} alt={`image of ${resident?.name}`} />
        
      </header>
      <div>
        <h3 className='name__Card'>{resident?.name}</h3>
        <ul>
          <li className='card'><span>Specie: </span>{resident?.species}</li>
          <li className='card'><span>Origin: </span>{resident?.origin.name}</li>
          <li className='card'><span>Eppisodes where appear: </span>{resident?.episode.length}</li>
          <li> <span className='status'>{resident?.status}</span></li>
        </ul>
      </div>
    </article>
  )
}

export default CardResident