import React from 'react'
import { Icon } from 'semantic-ui-react'

function LinkIcon({ url, iconName }) {
  return (
    <a href={url} target='_blank'>
      <Icon name={iconName} size='big'/>
    </a>
  )
}

export default LinkIcon
