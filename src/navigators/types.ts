import { RouteProp } from "@react-navigation/native"

import Routes from "./Routes"

interface INFO {
  name: string
  roomId: string
  roomUrl: string
}

export type RootStackParamList = {
  [Routes.CALL]: { info: INFO }
}

export type CallProps = RouteProp<RootStackParamList, Routes.CALL>
