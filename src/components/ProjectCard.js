import React, { Fragment } from 'react'

function ProjectCard({ project: {name, imgSrc, imgAlt, links} }) {
  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <img src={imgSrc} alt={imgAlt} />
          <p className='text-on-img'>{name}</p>
        </div>

        <div className='flip-card-back' style={{ display: 'table' }}>
          <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
            {
              links.map(({ url, text }, i) => (
                <Fragment key={name + ' ' + i}>
                  {
                    url ? (
                      <a href={url}>
                        <h2>{text}</h2>
                      </a>
                    ) : (
                      <h2 className='not-link'>{text}</h2>
                    )
                  }
                </Fragment>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
