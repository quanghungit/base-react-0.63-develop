import { useNavigation, useRoute } from "@react-navigation/native"
import React, { useEffect, useMemo } from "react"
import { SafeAreaView, StatusBar } from "react-native"

import styles from "./styles"
import Routes from "/navigators/Routes"
import JitsiMeet, { JitsiMeetView } from "react-native-jitsi-meet"
import { CallProps } from "/navigators/types"

const Call = () => {
  const navigator = useNavigation()

  const router = useRoute<CallProps>()

  useEffect(() => {
    setTimeout(() => {
      try {
        const userInfo = {
          displayName: router.name,
        }
        JitsiMeet.call("https://hop.bkns.vn/wvr270", userInfo)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error, "Lols")
      }
    }, 100)
  }, [])

  const onConferenceTerminated = async (nativeEvent: any = null) => {
    await JitsiMeet.endCall()
    if (nativeEvent) {
      setTimeout(() => navigator.navigate(Routes.LOGIN), 100)
    }
  }

  const onConferenceJoined = (nativeEvent: any) => {
    StatusBar.setHidden(false, "none") // don't remove
    StatusBar.setTranslucent(false) // don't remove

    setTimeout(() => {
      StatusBar.setHidden(true, "none") // this might be false if you want to show statusbar
      StatusBar.setTranslucent(true) // don't remove
      // StatusBar.setBackgroundColor("#000000") // you can remove
      // StatusBar.setBarStyle("light-content") // you can remove
    }, 100)
  }

  const onConferenceWillJoin = (nativeEvent: any) => {
    // log("onConferenceWillJoin: ", nativeEvent)
  }

  const renderCamera = useMemo(() => {
    return (
      <JitsiMeetView
        onConferenceTerminated={onConferenceTerminated}
        onConferenceJoined={onConferenceJoined}
        onConferenceWillJoin={onConferenceWillJoin}
        style={styles.container}
      />
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <SafeAreaView style={styles.container}>{renderCamera}</SafeAreaView>
}

export default Call
