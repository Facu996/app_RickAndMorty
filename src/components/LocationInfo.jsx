import React from 'react'

function LocationInfo({ location }) {

    return (
        <article className='location'>
            <h2 className='location_title' >{location?.name}</h2>
            <ul className='location_list'>
                <li className='location--item'><span className='location_info'>Type: </span>{location?.type} </li>
                <li className='location--item'><span className='location_info'>Dimension: </span>{location?.dimension}</li>
                <li className='location_item'><span className='location_info'>Population: </span>{location?.residents.length}</li>
            </ul>
        </article>

    )
}

export default LocationInfo