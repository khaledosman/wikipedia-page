import React, { memo } from 'react'
export default memo(function WikipediaPage ({ content, image, phrase }) {
  return (
    <div>
      <h3>{phrase}</h3>
      <div style={{ display: 'flex', padding: '5px' }}>
        <img src={image.source} width={image.width} height={image.height} loading='lazy' alt={phrase} />
        <p>{content}</p>
      </div>
    </div>
  )
})
