declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URL: string;
      MONGO_DB: string;
    }
  }
}

export default global;
