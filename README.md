# react-tags-canvas

> React component for tags canvas

[![NPM](https://img.shields.io/npm/v/react-tags-canvas.svg)](https://www.npmjs.com/package/react-tags-canvas) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-tags-canvas
```

## Usage

```jsx
import React, { Component } from 'react'

import TagsCanvas from 'react-tags-canvas'

class Example extends Component {
  render() {
    return (
      <TagsCanvas
        textColour='green'
        maxSpeed={0.06}
        freezeActive
        shuffleTags
        shape='sphere'
        zoom={0.7}
        noSelect
        textFont={null}
        pinchZoom
        tags={[
          { value: 'Javascript', weight: 30 },
          { value: 'React', weight: 30 },
          { value: 'HTML5', weight: 20 },
          { value: 'CSS3', weight: 20 },
          { value: 'PHP', weight: 30 },
          { value: 'Git', weight: 20 },
          { value: 'Redux', weight: 20 },
          { value: 'NodeJS', weight: 20 }
        ]}
      />
    )
  }
}
```

## Props

For full detail of props visit [Tags Canvas Website](https://www.goat1000.com/tagcanvas-options.php)
All of the options listed can be passed to the component as props.
The tags can be passed in as array of strings for unweighted tags or as an array of objects with the value and weight properties as shown in the above example

## License

MIT © [abdullahrazzaki](https://github.com/abdullahrazzaki)
