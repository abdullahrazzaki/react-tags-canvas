import React from 'react'

import ExampleComponent from 'react-tags-canvas'
import 'react-tags-canvas/dist/index.css'

const App = () => {
  return (
    <ExampleComponent
      tags={[
        { value: 'Javascript', weight: 30 },
        { value: 'React', weight: 30 },
        { value: 'HTML5', weight: 20 },
        { value: 'CSS3', weight: 20 },
        { value: 'PHP', weight: 30 },
        { value: 'Git', weight: 20 },
        { value: 'Redux', weight: 20 },
        { value: 'NodeJS', weight: 20 },
        { value: 'C#', weight: 30 },
        { value: 'Android', weight: 30 },
        { value: 'Typescript', weight: 20 },
        { value: 'Bootstrap', weight: 30 },
        { value: 'Ant Design', weight: 20 },
        { value: 'WinForms', weight: 20 }
      ]}
      text='Create React Library Example 😄'
    />
  )
}

export default App
