import axios from "axios"
import Configs from "react-native-config"

import { requestLog } from "./logger"

const headers = {
  "Content-Type": "application/json",
  CompanyId: Configs.COMPANY_ID,
  Namespace: Configs.NAME_SPACE,
  Secretkey: Configs.SECRET_KEY,
}

const Request = axios.create({
  baseURL: Configs.BASE_URL,
  timeout: 10000,
  headers,
})

Request.interceptors.request.use(
  (req) => {
    requestLog(req.method, req.data.fn, req, "req")

    return req
  },
  (error) => {
    return error
  },
)

Request.interceptors.response.use(
  (res) => {
    requestLog(res.config.method, res.config.data, res, "res")

    return res
  },
  (error) => {
    return Promise.reject(error)
  },
)

export const setAccessToken = (token?: string) => {
  if (token) {
    Request.defaults.headers.Authorization = token
  }
}

export const clearAccessToken = () => {
  Request.defaults.headers.Authorization = undefined
}

export const setLanguageRequest = (SourceLanguage: string, targetLanguage: string) => {
  Request.defaults.headers.SourceLanguage = SourceLanguage
  Request.defaults.headers.targetLanguage = targetLanguage
}

export default Request
