import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Nickname:</strong> {item.name}
            </li>
            <li>
              <strong>Description:</strong> {item.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
