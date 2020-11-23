export interface BaseResponse<T> {
  data: T
  error?: Error
  content?: string
  errorCode?: number
  message?: string
  messageCode?: number
  otherData?: any
  pageCount?: number
  state?: number
  success?: boolean
  totalRow?: number
}

export interface Pagination {
  pageIndex?: number
  pageSize?: number
  sortOrder?: number
}

export interface BaseUrl {
  m: string
  fn: string
}

export interface Paging {
  pageIndex?: number
  pageSize?: number
}
