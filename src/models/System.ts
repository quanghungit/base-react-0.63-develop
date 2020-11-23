export interface System {
  state: number
  configs?: {
    clientId: string
    companyAddress: string
    companyEmail: string
    companyName: string
    configKey: string
    firebaseApiKey: string
    storageApiUrl: string
    storageDomain: string
    urlChat: string
  }
}
