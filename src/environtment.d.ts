declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * App configuration
     */
    REACT_APP_VERSION: string

    /**
     * API Endpoints
     */
    REACT_APP_API_ENDPOINT: string
  }
}
