// import { useMeasure, useWindowScroll } from 'react-use'
import React, { useRef } from 'react'
import { Player, BigPlayButton } from 'video-react'
import ScreenRange from './ScreenRange'

import './index.scss'
import Video from './Video'

const ScreenRangeProvider = ScreenRange.Provider
const Test = () => (
  <div>
    <ScreenRangeProvider>
      <div style={{ height: 50 }} />
      <Video />
      <div style={{ height: 600 }} />
      <Video />
      <div style={{ height: 10 }} />
      <Video />
      <div style={{ height: 600 }} />
    </ScreenRangeProvider>
  </div>
)

export default Test
