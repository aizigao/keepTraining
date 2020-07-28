import { useCallback, useState } from 'react'
import { createContainer } from 'unstated-next'
import { omit } from 'lodash'

const useMultiScreenRangeManager = () => {
  const [screenRangeRefMap, setScreenRangeRefMap] = useState({})
  const addScreenRangeRef = useCallback(
    (uuid, rRef) => {
      setScreenRangeRefMap({
        ...screenRangeRefMap,
        [uuid]: rRef,
      })
    },
    [screenRangeRefMap]
  )
  const delScreenRangeRef = useCallback(
    (uuid) => {
      if (uuid in screenRangeRefMap) {
        setScreenRangeRefMap(omit(screenRangeRefMap, uuid))
      }
    },
    [screenRangeRefMap]
  )

  console.log('ttt', { screenRangeRefMap })

  return {
    screenRangeRefMap,
    addScreenRangeRef,
    delScreenRangeRef,
  }
}

const MutilScreenRangeManager = createContainer(useMultiScreenRangeManager)

const { useContainer, Provider } = MutilScreenRangeManager
export { Provider as default, useContainer }
