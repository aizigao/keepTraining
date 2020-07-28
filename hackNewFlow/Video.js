import React, { useEffect, useRef, useMemo } from 'react'
import { Player, BigPlayButton } from 'video-react'
import { v4 as uuid } from 'uuid'
import 'video-react/dist/video-react.css' // import css
import { each } from 'lodash'
import './index.scss'
import ScreenRange from './ScreenRange'
import { useContainer } from './ScreenRange/Provider'

const Video = () => {
  const playerRef = useRef(null)
  const compUUID = useMemo(() => uuid(), [])

  const {
    screenRangeRefMap,
    addScreenRangeRef,
    delScreenRangeRef,
  } = useContainer()
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.subscribeToStateChange((state, prevState) => {
        // console.log(autoPlayControll)
        if (state.paused !== prevState.paused) {
          if (state.paused) {
            delScreenRangeRef(compUUID)
          } else {
            //  playerRef.current.isScrollControllPlayed = false 时为 手动播放

            // const currentIsManuPlayed =
            //   playerRef.current.isScrollControllPlayed === false

            // // 1. 没有主动播放视频时

            // // 2. 有主动播放的视频时

            addScreenRangeRef(compUUID, playerRef)
            each(screenRangeRefMap, (otherRef, uuid) => {
              if (uuid !== compUUID) {
                if (otherRef.current && otherRef.current.pause) {
                  otherRef.current.pause()
                }
              }
            })
          }
        }
      })
    }
  }, [playerRef, screenRangeRefMap])
  const hasManuPalyedVideo = useMemo(
    () =>
      Object.values(screenRangeRefMap || []).some((ref) => ref.current && !ref.current.isScrollControllPlayed),
    [screenRangeRefMap]
  )
  return (
    <ScreenRange
      range={[0, 300]}
      onEnterRange={() => {
        setTimeout(() => {
          if (!hasManuPalyedVideo) {
            playerRef.current.isScrollControllPlayed = true
            playerRef.current.play()
          }
        }, 0)
      }}
      onLeaveRange={() => {
        const playerState = playerRef.current.getState()
        if (!playerState.player.paused) {
          playerRef.current.isScrollControllPlayed = false
          playerRef.current.pause()
        }
      }}
      className='dtplayerCont'
    >
      <Player
        ref={playerRef}
        playsInline
        className='dtplayer'
        poster='http://pubtrans-dev.oss-cn-hangzhou.aliyuncs.com/announcement/29501581910650000.jpeg'
        preload='none'
        src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
      >
        <BigPlayButton position='center' className='dtplayer__btn' />
      </Player>
    </ScreenRange>
  )
}

export default Video
