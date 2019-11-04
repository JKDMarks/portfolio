import React, { Fragment } from 'react'

function ProjectCard({ project: {name, imgSrc, imgAlt, links} }) {
  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front' style={{zIndex: 0}}>
          <img src={imgSrc} alt={imgAlt} />
          <p className='text-on-img' style={{zIndex: 1}}>{name}</p>
        </div>

        <div className='flip-card-back'>
          <div className='true-center'>
            {
              links.map(({ url, text }, i) => (
                <Fragment key={name + ' ' + i}>
                  {
                    url ? (
                      <a href={url} target='_blank'>
                        <h2 style={{zIndex: 2}}>{text}</h2>
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
