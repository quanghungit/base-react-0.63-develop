import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux"

import { System } from "/models/System"
import { AppAction } from "/redux"
import { systemSelector } from "/redux/system/selectors"
import { getSystem } from "/redux/system/actions"

const useSystem = (): [System, () => void] => {
  const system = useSelector(systemSelector)
  const dispatch = useDispatch<Dispatch<AppAction>>()

  return [system, () => dispatch(getSystem.request())]
}

export default useSystem
