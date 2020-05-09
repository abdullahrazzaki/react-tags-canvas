import React from 'react'
import TagCanvas from './tagcanvas'

// Used from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

const TagsCanvas = ({
  width,
  height,
  tags,
  weight = true,
  weightFrom = 'data-weight',
  className,
  ...options
}) => {
  const [id] = React.useState('a' + uuidv4())
  React.useEffect(() => {
    TagCanvas.Start(id, `${id}-tags`, { weight, weightFrom, ...options })
  }, [options])
  return (
    <canvas className={className} width={width} height={height} id={id}>
      <div id={`${id}-tags`} className='tag-cloud-tags'>
        <ul>
          {tags.map((tag) => {
            if (tag.value) {
              return (
                <li key={tag.value}>
                  <a data-weight={tag.weight}>{tag.value}</a>
                </li>
              )
            }
            return (
              <li key={tag}>
                <a>{tag}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </canvas>
  )
}
export default TagsCanvas
