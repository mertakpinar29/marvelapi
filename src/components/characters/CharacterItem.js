import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='content'>
      <div className='content-inner'>
        <div className='content-front'>
          <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt='' />
        </div>
        <div className='content-back'>
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
