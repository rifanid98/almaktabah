import appConfig from "./appConfig";

const apiUri = {
  auth: {
    login: `${appConfig.url.api}/auth/login`,
    register: `${appConfig.url.api}/auth/register`,
    refreshtoken: `${appConfig.url.api}/auth/refreshtoken`
  },
  books: `${appConfig.url.api}/books`,
  genres: {
    all: `${appConfig.url.api}/genres`,
    used: `${appConfig.url.api}/genres/used/all`
  },
  users: `${appConfig.url.api}/users`,
  histories: `${appConfig.url.api}/histories`,
  authors: `${appConfig.url.api}/authors`
}

export { apiUri };