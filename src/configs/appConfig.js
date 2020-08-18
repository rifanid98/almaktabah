import { API_URL, ACTIVE_CONFIG, ORIGIN } from "./env";

const activeConfig = ACTIVE_CONFIG;
const constants = {
  dev: {
    url: {
      api: API_URL,
      assets: ORIGIN + '/libraryapp-api/images',
      origin: ORIGIN
    }
  },

  production: {
    url: {
      api: API_URL,
      assets: "",
      origin: ""
    }
  }
};

const appConfig = constants[activeConfig];

export default appConfig;
