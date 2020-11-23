export interface User {
  memberId?: number
  email?: string
  userName?: string
  mobile?: number
  fullName?: string
  firstName?: string
  lastName?: string
  countryName?: string
  avatar?: string
  loginType?: LoginType
  openId?: number
  token?: string
  id?: number
  password?: string
  status?: number
  createdDate?: number
  modifiedDate?: number
  address?: string
  gender?: string
  facebook?: string
  examCount?: number
  memberCode?: string
  country?: string
  level?: number
  star?: number
  dueDiligence?: number
  phone?: string
  dateOfBirth?: Date
  isFirstLogin?: boolean
  flagNational: string
  flagSourceLanguage?: string
  state: number
  skype?: string
  description?: string
  currencyName?: string
  currencyCode?: string
  timeZone?: string
  timeZoneText?: string
  timeZoneOffset?: string
  isInvite?: boolean
  isContact?: boolean
  type: number
}

export enum LoginType {
  TECH_CO = "WeTalk",
  FACEBOOK = "facebook",
  GOOGLE = "google",
}
