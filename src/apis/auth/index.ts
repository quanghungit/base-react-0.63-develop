import Toast from "react-native-simple-toast"

import Request from "/apis/request"
import { API_DEFAULT } from "/apis/urls"

import { BaseResponse } from "../types"  
import { UseToken } from "/models/Token"
import { Meeting } from "./types"
import { MEET } from "./config"

 

export const meeting = async (params: Meeting): Promise<UseToken> => {
  try {
    const res = await Request.post<BaseResponse<string>>(API_DEFAULT, {
      ...MEET,
      ...params,
    })

    if (!res || !res.data.success) {
      Toast.show(res.data.message!)
      throw new Error(res.data.message)
    }

    return { token: res.data.data } as UseToken
  } catch (error) {
    throw error
  }
}
 