import { getLocalStorageProperty } from "../../src/utils/getLocalStorageProperty";
import { AxiosBuilder } from "./axios.builder";

const token = getLocalStorageProperty("user", "token");
const baseUrl = ""; //api do backend

const instances = {
  public: AxiosBuilder.build()
    .withDefaultHeader()
    .toDomain()
    .initInstance(),
  private: AxiosBuilder.build()
    .withUrl(baseUrl)
    .withHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    })
    .haveCredentials()
    .toDomain()
    .initInstance(),
  privateFile: AxiosBuilder.build()
    .withUrl(baseUrl)
    .withHeaders({
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*"
    })
    .haveCredentials()
    .toDomain()
    .initInstance(),
};

instances.private.interceptors.request.use(
  (config) => {
    if (config.headers.Authorization === undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instances.private.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("user");
    }
    return Promise.reject(error);
  }
);

export { instances };