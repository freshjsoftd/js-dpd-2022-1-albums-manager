import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import dataServices from '../../data-service'

function AlbumPhotos() {

  const [photos, setPhotos] = useState([]);

  const {id} = useParams()

  useEffect(() => {
    dataServices.get(`/photos?albumId=${id}`)
      .then(({data}) => setPhotos(data))
      .catch((error) => console.log(error))
  }, [id])

  return (
    <div>
      {photos.map(({title,id, thumbnailUrl}) => (
        <p key={id}>
          {title}
          <img 
          src={thumbnailUrl}
          alt={title}
          widt='150px'
          ></img>
        </p>
      ))}
    </div>
  )
}

export default AlbumPhotos