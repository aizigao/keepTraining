import { useMeasure, useWindowScroll } from 'react-use'
import React, { useEffect, useRef } from 'react'
import { Player, BigPlayButton } from 'video-react'
import 'video-react/dist/video-react.css' // import css
import './index.scss'

const range = [0, 300]
const Video = () => {
  const { y: windowScrollY } = useWindowScroll()
  const playerConRef = useRef(null)
  const playerRef = useRef(null)
  useEffect(() => {
    const dom = playerConRef.current
    if (dom) {
      const { top, bottom } = dom.getBoundingClientRect()
      const [rangeMin, rangeMax] = range
      const playerState = playerRef.current.getState()
      if (top >= rangeMin && bottom <= rangeMax) {
        setTimeout(() => {
          playerRef.current.play()
        }, 0)
      } else if (!playerState.player.paused) {
        playerRef.current.pause()
      }
    }
  }, [windowScrollY, playerRef, playerConRef])
  return (
    <div>
      <div style={{ height: 50 }} />
      <div ref={playerConRef}>
        <Player
          ref={playerRef}
          playsInline
          className="dtplayer"
          poster="http://pubtrans-dev.oss-cn-hangzhou.aliyuncs.com/announcement/29501581910650000.jpeg"
          preload="none"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
          <BigPlayButton position="center" className="dtplayer__btn" />
        </Player>
      </div>
      <div style={{ height: 600 }} />
      <Player
        playsInline
        className="dtplayer"
        poster="http://pubtrans-dev.oss-cn-hangzhou.aliyuncs.com/announcement/29501581910650000.jpeg"
        preload="none"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
        <BigPlayButton position="center" className="dtplayer__btn" />
      </Player>
    </div>
  )
}

export default Video
