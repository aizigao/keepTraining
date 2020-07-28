import { noop, isNil } from 'lodash'
import { useWindowScroll } from 'react-use'
import { v4 as uuid } from 'uuid'
import React, { useEffect, useRef, useMemo } from 'react'
import MultiProvider, { useContainer } from './Provider'

// 自定义化
const ScreenRange = ({
  children,
  range = [0, 300],
  onEnterRange = noop,
  onLeaveRange = noop,
  className,
}) => {
  const {
    screenRangeRefMap,
    addScreenRangeRef,
    delScreenRangeRef,
  } = useContainer()

  // init
  const compUUID = useMemo(() => uuid(), [])
  // 节流
  // 自定义scrollContainer
  const { y: windowScrollY } = useWindowScroll()
  const contRef = useRef(null)
  const isInRange = useRef(null)
  useEffect(() => {
    const dom = contRef.current
    if (dom) {
      const { top, bottom } = dom.getBoundingClientRect()
      const [rangeMin, rangeMax] = range
      if (
        top >= rangeMin &&
        bottom <= rangeMax &&
        (isNil(isInRange.current) || !isInRange.current)
      ) {
        // addScreenRangeRef(compUUID, contRef)
        isInRange.current = true
        onEnterRange()
      } else if (isNil(isInRange.current) || isInRange.current) {
        onLeaveRange()
        isInRange.current = false
        // delScreenRangeRef(compUUID)
      }
    }
  }, [windowScrollY, contRef])
  return (
    <div ref={contRef} data-uuid={compUUID} className={className}>
      {children}
    </div>
  )
}

ScreenRange.Provider = MultiProvider

export default ScreenRange
