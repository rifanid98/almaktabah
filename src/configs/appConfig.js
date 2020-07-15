import { API_URL, ACTIVE_CONFIG } from '@env';
const activeConfig = ACTIVE_CONFIG;
const origin = 'localhost:8081';
// const origin = window.location.origin;

const constants = {
  dev: {
    url: {
      api: "http://localhost:3000/libraryapp-api",
      assets: "../assets",
      origin: origin
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
