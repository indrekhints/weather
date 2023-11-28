import React from 'react'

const LocationName = (props) => {
    return (
        <div>
            <h3 className='LocationName'>Weather forecast {props.selectedLocation.name}</h3>
        </div>
    )
}

export default LocationName
