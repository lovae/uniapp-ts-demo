
interface IServiceHttpUri {
  UrlScheme: string,
  UrlHost: string,
  UrlPort: number,
  UrlBaseAdress: string
}

interface IServiceLocation {
  name: string,
  isdefault: boolean,
  apitype: string, /* local 或 remote */

  serviceHttpUri: IServiceHttpUri
}

export { IServiceHttpUri, IServiceLocation }
