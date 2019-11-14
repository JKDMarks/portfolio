import React from 'react'
import { Icon } from 'semantic-ui-react'

function LinkIcon({ url, iconName, description }) {
  return (
    <a href={url} className='tooltip' target='_blank' rel='noopener noreferrer'>
      <Icon className='link-icon' name={iconName} />
      <span className='tooltip-text'>{description}</span>
    </a>
  )
}

export default LinkIcon
